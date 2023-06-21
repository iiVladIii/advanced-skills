import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { ArticleList } from '@/entities/Article';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './ArticleRecommendationsList.module.scss';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();

    const { data: articles, isLoading } = useArticleRecommendationsList(4);

    return (
        <VStack gap="8" max>
            <Text
                size={TextSize.L}
                title={t('Рекомендуем')}
            />
            <ArticleList
                className={cls.recommendations}
                articles={articles ?? []}
                isLoading={isLoading}
                target="_blank"
            />
        </VStack>
    );
});
