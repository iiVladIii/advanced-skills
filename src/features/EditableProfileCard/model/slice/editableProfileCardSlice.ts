import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from '@/entities/Profile';
import { ProfileSchema } from '../types/EditableProfileCardSchema';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState:ProfileSchema = {
    isLoading: false,
    readonly: true,
    error: undefined,
};

export const editableProfileCardSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action:PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },

        setProfileData: (state, action:PayloadAction<Profile>) => {
            state.form = action.payload;
            // state.data = action.payload;
        },

        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
            state.validateErrors = undefined;
        },

        updateProfile: (state, action:PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action:PayloadAction<Profile>) => {
                state.form = action.payload;
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.validateErrors = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (state, action:PayloadAction<Profile>) => {
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
                state.isLoading = false;
                state.validateErrors = undefined;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.validateErrors = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: editableProfileCardActions } = editableProfileCardSlice;
export const { reducer: editableProfileCardReducer } = editableProfileCardSlice;
