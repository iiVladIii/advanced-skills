import { ThunkConfig } from 'app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    getEditableProfileCardForm,
} from 'features/EditableProfileCard';
import { Profile } from '../../type/profile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
            getState,
        } = thunkAPI;

        const formData = getEditableProfileCardForm(getState());

        try {
            const response = await extra.api.put<Profile>('/profile', formData);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('Вы ввели неверный логин или пароль');
        }
    },
);
