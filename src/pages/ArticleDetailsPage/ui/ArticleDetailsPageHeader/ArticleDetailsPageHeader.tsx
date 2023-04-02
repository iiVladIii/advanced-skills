import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from 'shared/config/routerConfig/routerConfig';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { HStack } from 'shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const {
        className,
    } = props;
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const { t } = useTranslation('article-details');

    const navigate = useNavigate();
    const onBackToList = useCallback(() => {
        navigate(RouterPath.articles);
    }, [navigate]);

    const onEditeArticle = useCallback(() => {
        navigate(`${`${RouterPath.article_details}${article?.id}`}/edit`);
    }, [article?.id, navigate]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Button onClick={onBackToList}>{t('Назад к списку')}</Button>
            {canEdit && (
                <Button
                    onClick={onEditeArticle}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Редактировать')}
                </Button>
            )}
        </HStack>
    );
});
