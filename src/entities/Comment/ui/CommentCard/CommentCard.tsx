import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Comment } from '../../model/types/comment';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import cls from './CommentCard.module.scss';
import { getRouteProfile } from '@/shared/const/router';
import { getVStack, HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { AppLink } from '@/shared/ui/redesigned/AppLink';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    if (isLoading) {
        return (
            <VStack
                gap="8"
                data-testid="CommentCard.Loading"
                max
                className={classNames(cls.CommentCardRedesigned, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <div className={cls.header}>
                    <Skeleton borderRadius="50%" width={30} height={30} />
                    <Skeleton height={16} width={100} />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    border="12"
                    fullWidth
                    data-testid="CommentCard.Content"
                    className={classNames(cls.CommentCardRedesigned, {}, [
                        className,
                        getVStack({ gap: '8' }),
                    ])}
                >
                    <AppLink to={getRouteProfile(comment.user.id)}>
                        <HStack gap="8">
                            {comment.user.avatar ? (
                                <Avatar size={30} src={comment.user.avatar} />
                            ) : null}
                            <Text title={comment.user.username} />
                        </HStack>
                    </AppLink>
                    <Text text={comment.text} />
                </Card>
            }
            off={
                <VStack
                    data-testid="CommentCard.Content"
                    gap="8"
                    max
                    className={classNames(cls.CommentCard, {}, [className])}
                >
                    <AppLinkDeprecated
                        to={getRouteProfile(comment.user.id)}
                        className={cls.header}
                    >
                        {comment.user.avatar ? (
                            <AvatarDeprecated
                                size={30}
                                src={comment.user.avatar}
                            />
                        ) : null}
                        <TextDeprecated title={comment.user.username} />
                    </AppLinkDeprecated>
                    <TextDeprecated className={cls.text} text={comment.text} />
                </VStack>
            }
        />
    );
});
