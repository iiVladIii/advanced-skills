import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'user' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('1234'),
        )).toEqual({ username: '1234' });
    });

    test('set password', () => {
        const state: DeepPartial<LoginSchema> = { password: 'pass' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('1234'),
        )).toEqual({ password: '1234' });
    });
});
