import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { Page } from '@/widgets/Page/Page';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string
}

const ProfilePage = (props: ProfilePageProps) => {
    const {
        className,
    } = props;

    const { id } = useParams<{id:string}>();

    return (
        <Page className={classNames(cls.ProfilePage, {}, [className])}>
            <EditableProfileCard id={id} />
        </Page>
    );
};

export default ProfilePage;
