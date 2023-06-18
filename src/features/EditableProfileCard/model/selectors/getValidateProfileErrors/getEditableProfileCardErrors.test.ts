import { StateSchema } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ValidateProfileError } from '../../consts/consts';
import { getValidateProfileErrors } from './getValidateProfileErrors';

describe('getValidateProfileErrors.test', () => {
    test('should return validate errors', () => {
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
                validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
            },
        };
        expect(getValidateProfileErrors(state as StateSchema)).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getValidateProfileErrors(state as StateSchema)).toEqual(undefined);
    });
});
