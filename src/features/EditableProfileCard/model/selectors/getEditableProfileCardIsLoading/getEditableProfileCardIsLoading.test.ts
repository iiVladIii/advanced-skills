import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getEditableProfileCardIsLoading } from './getEditableProfileCardIsLoading';

describe('getEditableProfileCardIsLoading.test', () => {
    test('should return isLoading', () => {
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
            },
        };
        expect(getEditableProfileCardIsLoading(state as StateSchema)).toEqual(true);
    });

    test('work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getEditableProfileCardIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
