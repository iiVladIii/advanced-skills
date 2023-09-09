export { userReducer, userActions } from './model/slice/userSlice';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export { getUserInited } from './model/selectors/getUserInited/getUserInited';

export type { User, UserSchema } from './model/types/user';

export {
    getUserRoles,
    isUserAdmin,
    isUserManager,
} from './model/selectors/roleSelectors';
export { UserRole } from './model/consts/consts';

export { useJsonSettings } from './model/selectors/jsonSettings';
export { saveJsonSettings } from './model/services/saveJsonSettings';

export { initAuthData } from './model/services/initAuthData';
