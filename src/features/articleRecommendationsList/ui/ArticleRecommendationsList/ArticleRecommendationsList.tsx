import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/redesigned/Stack';
import cls from './ArticleRecommendationsList.module.scss';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();

        const { data: articles, isLoading } = useArticleRecommendationsList(4);

        return (
            <VStack gap="8" max data-testid="ArticleRecommendationsList">
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text size="l" title={t('Рекомендуем')} />}
                    off={
                        <TextDeprecated
                            size={TextSize.L}
                            title={t('Рекомендуем')}
                        />
                    }
                />
                <ArticleList
                    articles={articles ?? []}
                    isLoading={isLoading}
                    target="_blank"
                    className={cls.recommendations}
                />
            </VStack>
        );
    },
);
