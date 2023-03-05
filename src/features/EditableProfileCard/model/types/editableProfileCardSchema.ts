import { Profile } from 'entities/Profile';

export interface EditableProfileCardSchema {
    data?: Profile;
    form?: Profile;
    readonly: boolean;
    isLoading: boolean;
    error?: string;
}
