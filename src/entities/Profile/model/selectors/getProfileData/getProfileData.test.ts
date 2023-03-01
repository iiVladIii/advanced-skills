import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';

describe('get profile data', () => {
    test('should return profile data is undefined', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
                readonly: true,
                error: 'error',
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });

    // test('work with empty state', () => {
    //     const state: DeepPartial<StateSchema> = {};
    //     expect(getProfileData(state as StateSchema)).toEqual(undefined);
    // });
});
