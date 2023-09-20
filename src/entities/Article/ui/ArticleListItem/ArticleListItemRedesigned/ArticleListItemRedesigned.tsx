import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItemRedesigned.module.scss';
import { ArticleListItemProps } from '../ArticleListItem';
import { Text } from '@/shared/ui/redesigned/Text';
import { Icon } from '@/shared/ui/redesigned/Icon';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { ArticleTextBlock } from '../../../model/types/article';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getRouteArticleDetails } from '@/shared/const/router';
import { Button } from '@/shared/ui/redesigned/Button';
import { getVStack, HStack } from '@/shared/ui/redesigned/Stack';
import {
    ArticleBlockType,
    ArticleView,
} from '../../../model/consts/articleConsts';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation('articles');

    const views = (
        <HStack gap="8">
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} className={cls.views} />
        </HStack>
    );

    if (view === ArticleView.BIG) {
        const textBlocks = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <Card
                data-testid="ArticleListItem"
                padding="24"
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls.BIG,
                    cls[view],
                    getVStack({ gap: '16' }),
                ])}
            >
                <HStack gap="8">
                    <Avatar src={article.user.avatar} size={32} />
                    <Text bold text={article.user.username} />
                    <Text text={article.createdAt} />
                </HStack>
                <Text title={article.title} bold />
                <Text title={article.subtitle} bold size="s" />
                <AppImage
                    fallback={<Skeleton width="100%" height={250} />}
                    src={article.img}
                    alt={article.title}
                    className={cls.img}
                />
                {textBlocks?.paragraphs && (
                    <Text
                        className={cls.textBlock}
                        text={textBlocks.paragraphs.slice(0, 2).join(' ')}
                    />
                )}
                <HStack max justify="between">
                    <AppLink
                        target={target}
                        to={getRouteArticleDetails(article.id)}
                    >
                        <Button>{t('Читать далее...')}</Button>
                    </AppLink>
                    {views}
                </HStack>
            </Card>
        );
    }
    return (
        <AppLink
            data-testid="ArticleListItem"
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <AppImage
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                        fallback={<Skeleton width={200} height={200} />}
                    />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>{views}</div>
                <Text title={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
