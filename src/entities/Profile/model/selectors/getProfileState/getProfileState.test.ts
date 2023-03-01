import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileState } from './getProfileState';

describe('get profile state', () => {
    test('should return profileState', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
                readonly: true,
                error: 'error',
            },
        };
        expect(getProfileState(state as StateSchema)).toEqual({
            isLoading: true,
            readonly: true,
            error: 'error',
            data: undefined,
        });
    });

    test('work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileState(state as StateSchema)).toEqual(undefined);
    });
});
