import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from 'entities/Profile';
import { EditableProfileCardSchema } from '../types/editableProfileCardSchema';

const initialState:EditableProfileCardSchema = {
    isLoading: false,
    error: undefined,
    readonly: true,
    data: undefined,
    form: undefined,
};

export const editableProfileCardSlice = createSlice({
    name: 'editableProfileCardSlice',
    initialState,
    reducers: {
        setReadonly: (state, action:PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },

        setProfileData: (state, action:PayloadAction<Profile>) => {
            state.form = action.payload;
            state.data = action.payload;
        },

        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
        },

        updateProfile: (state, action:PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {},
});

export const { actions: editableProfileCardSliceActions } = editableProfileCardSlice;
export const { reducer: editableProfileCardSliceReducer } = editableProfileCardSlice;
