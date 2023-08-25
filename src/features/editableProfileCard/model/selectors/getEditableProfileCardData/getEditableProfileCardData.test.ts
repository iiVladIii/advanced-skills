import { StateSchema } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { getEditableProfileCardData } from './getEditableProfileCardData';

describe('getEditableProfileCardData.test', () => {
    test('should return data', () => {
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
        expect(getEditableProfileCardData(state as StateSchema)).toEqual(data);
    });

    test('work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getEditableProfileCardData(state as StateSchema)).toEqual(
            undefined,
        );
    });
});
