import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { ArticleSortSelector } from '@/features/articleSortSelector';
import { Input } from '@/shared/ui/redesigned/Input';
import { ArticleTypeTabs } from '@/features/articleTypeTabs';
import { Card } from '@/shared/ui/redesigned/Card';
import { getVStack } from '@/shared/ui/redesigned/Stack';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { TabItem } from '@/shared/ui/deprecated/Tabs';

interface ArticlesFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    search: string;
    onChangeSearch: (value: string) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    type: ArticleType;
    onChangeType: (tab: TabItem<ArticleType>) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const {
        className,
        onChangeSearch,
        search,
        onChangeSort,
        onChangeOrder,
        order,
        type,
        onChangeType,
        sort,
    } = props;
    const { t } = useTranslation();

    return (
        <Card
            className={classNames(cls.ArticlesFilters, {}, [
                className,
                getVStack({ gap: '32' }),
            ])}
            padding="24"
        >
            <Input
                value={search}
                onChange={onChangeSearch}
                placeholder={t('Поиск')}
            />
            <ArticleTypeTabs
                className={cls.tabs}
                type={type}
                onChangeType={onChangeType}
            />
            <ArticleSortSelector
                sort={sort}
                order={order}
                onChangeSort={onChangeSort}
                onChangeOrder={onChangeOrder}
            />
        </Card>
    );
});
