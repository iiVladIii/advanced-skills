import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe('get profile form', () => {
    test('should return profile form is undefined', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
                readonly: true,
                error: 'error',
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });

    // test('work with empty state', () => {
    //     const state: DeepPartial<StateSchema> = {};
    //     expect(getProfileData(state as StateSchema)).toEqual(undefined);
    // });
});
