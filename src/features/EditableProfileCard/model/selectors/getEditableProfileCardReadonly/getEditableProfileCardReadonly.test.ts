import { StateSchema } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { getEditableProfileCardReadonly } from './getEditableProfileCardReadonly';

describe('getEditableProfileCardReadonly.test', () => {
    test('should return readonly', () => {
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
                isLoading: true,
                readonly: false,
            },
        };
        expect(getEditableProfileCardReadonly(state as StateSchema)).toEqual(false);
    });

    test('work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getEditableProfileCardReadonly(state as StateSchema)).toEqual(undefined);
    });
});
