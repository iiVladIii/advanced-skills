import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../consts/consts';

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    readonly: boolean;
    isLoading: boolean;
    error?: string;
    validateErrors?: ValidateProfileError[];
}
