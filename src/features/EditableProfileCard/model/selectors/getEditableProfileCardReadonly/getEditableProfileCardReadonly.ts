import { StateSchema } from '@/app/providers/StoreProvider';

export const getEditableProfileCardReadonly = (state:StateSchema) => state.profile?.readonly;
