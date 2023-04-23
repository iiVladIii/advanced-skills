import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from '../consts/consts';
import { ProfileSchema } from '../types/EditableProfileCardSchema';
import { editableProfileCardActions, editableProfileCardReducer } from './editableProfileCardSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    first: 'name',
    city: 'City',
    age: 20,
    lastname: 'lastname',
    username: 'username',
    currency: Currency.RUB,
    country: Country.Russia,
};

describe('editableProfileCardSlice.test', () => {
    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(editableProfileCardReducer(
            state as ProfileSchema,
            editableProfileCardActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('test set name', () => {
        const state: DeepPartial<ProfileSchema> = { form: { first: 'new name' } };
        expect(editableProfileCardReducer(
            state as ProfileSchema,
            editableProfileCardActions.setProfileData({ first: 'new name' }),
        )).toEqual({
            form: { first: 'new name' },
        });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { ...data, first: 'new name' } };
        expect(editableProfileCardReducer(
            state as ProfileSchema,
            editableProfileCardActions.cancelEdit(),
        )).toEqual({
            data,
            readonly: true,
            validateErrors: undefined,
            form: data,
        });
    });

    test('test update profile pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(editableProfileCardReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });
    test('test update profile fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(editableProfileCardReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            data,
            form: data,
        });
    });
});
