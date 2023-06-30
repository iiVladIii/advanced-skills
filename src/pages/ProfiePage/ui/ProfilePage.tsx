import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { Page } from '@/widgets/Page';
import cls from './ProfilePage.module.scss';
import { ProfileRating } from '@/features/profileRating';
import { VStack } from '@/shared/ui/Stack';

interface ProfilePageProps {
    className?: string
}

const ProfilePage = (props: ProfilePageProps) => {
    const {
        className,
    } = props;

    const { id } = useParams<{id:string}>();

    if (!id) {
        return null;
    }

    return (
        <Page data-testid="ProfilePage" className={classNames(cls.ProfilePage, {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
                <ProfileRating profileId={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
