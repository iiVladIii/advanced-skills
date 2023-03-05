import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { EditableProfileCard, editableProfileCardReducer } from 'features/EditableProfileCard';
import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
    profile: editableProfileCardReducer,
};
interface ProfilePageProps {
    className?: string
}

const ProfilePage = (props: ProfilePageProps) => {
    const {
        className,
    } = props;

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <EditableProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
