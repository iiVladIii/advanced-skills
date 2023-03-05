import { StateSchema } from 'app/providers/StoreProvider';

export const getEditableProfileCardError = (state:StateSchema) => state.profile?.error;
