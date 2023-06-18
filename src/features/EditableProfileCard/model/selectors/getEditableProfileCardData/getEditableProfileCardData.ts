import { StateSchema } from '@/app/providers/StoreProvider';

export const getEditableProfileCardData = (state:StateSchema) => state?.profile?.data;
