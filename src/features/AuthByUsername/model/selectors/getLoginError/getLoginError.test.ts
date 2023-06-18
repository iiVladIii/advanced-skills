import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginErrorTest', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '',
                password: '',
                isLoading: false,
                error: 'error',
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual('error');
    });

    test('work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
