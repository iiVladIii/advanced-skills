import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleRating } from '@/features/articleRating';
import { getFeatureFlag } from '@/shared/lib/features';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    // articleDetailsComments: articleDetailsCommentsReducer,
    // articleDetailsRecommendations: articleDetailsRecommendationsReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');

    const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');

    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                <VStack gap="16">
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    {isArticleRatingEnabled && <ArticleRating articleId={id} />}
                    <ArticleRecommendationsList
                        className={cls.recommendations}
                    />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
