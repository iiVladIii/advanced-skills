import { StateSchema } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { getEditableProfileCardForm } from './getEditableProfileCardForm';

describe('getEditableProfileCardForm.test', () => {
    test('should return form', () => {
        const data = {
            first: 'name',
            city: 'City',
            age: 20,
            lastname: 'lastname',
            currency: Currency.RUB,
            country: Country.Russia,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error',
                data,
                form: data,
            },
        };
        expect(getEditableProfileCardForm(state as StateSchema)).toEqual(data);
    });

    test('work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getEditableProfileCardForm(state as StateSchema)).toEqual(undefined);
    });
});
