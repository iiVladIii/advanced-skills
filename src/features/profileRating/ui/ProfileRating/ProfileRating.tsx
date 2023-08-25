import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useGetProfileRating, useRateProfile } from '../../api/profileRating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className, profileId } = props;
    const { t } = useTranslation('profile');
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetProfileRating({
        profileId,
        userId: userData?.id ?? '',
    });

    const [rateProfileMutation] = useRateProfile();

    const handleRateArticleMutation = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateProfileMutation({
                    rate: starsCount,
                    profileId,
                    userId: userData?.id ?? '',
                    feedback,
                });
            } catch (e: any) {
                console.log(e);
            }
        },
        [profileId, rateProfileMutation, userData?.id],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateArticleMutation(starsCount, feedback);
        },
        [handleRateArticleMutation],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateArticleMutation(starsCount);
        },
        [handleRateArticleMutation],
    );

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={t('Как вам профиль пользователя?')}
            feedbackTitle={t(
                'Оставьте свой отзыв о статье, это поможет улучшить качество',
            )}
            hasFeedback
        />
    );
});

export default ProfileRating;
