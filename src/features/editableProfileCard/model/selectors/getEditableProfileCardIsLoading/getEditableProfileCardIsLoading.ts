import { StateSchema } from '@/app/providers/StoreProvider';

export const getEditableProfileCardIsLoading = (state:StateSchema) => state.profile?.isLoading;
