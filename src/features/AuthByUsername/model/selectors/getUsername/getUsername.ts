import { createSelector } from '@reduxjs/toolkit';
import { LoginSchema } from '../../types/loginSchema';
import { getLoginState } from '../getLoginState/getLoginState';

export const getUsername = createSelector(
    getLoginState,
    (loginForm:LoginSchema) => loginForm.username,
);
