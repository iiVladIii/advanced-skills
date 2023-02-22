import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
    password: string;
    username: string;
}
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
    'login/loginByUsername',
    async ({ password, username }, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8080/login', {
                password,
                username,
            });

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setUserData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Вы ввели неверный логин или пароль');
        }
    },
);
