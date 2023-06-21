import { StateSchema } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { getEditableProfileCardError } from './getEditableProfileCardError';

describe('get editable profile error', () => {
    test('should return error', () => {
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
            },
        };
        expect(getEditableProfileCardError(state as StateSchema)).toEqual('error');
    });

    test('work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getEditableProfileCardError(state as StateSchema)).toEqual(undefined);
    });
});
