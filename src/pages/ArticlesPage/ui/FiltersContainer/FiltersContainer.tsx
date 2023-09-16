import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;

    const {
        onChangeSearch,
        onChangeType,
        search,
        onChangeSort,
        onChangeOrder,
        order,
        sort,
        type,
    } = useArticleFilters();

    return (
        <ArticlesFilters
            className={className}
            sort={sort}
            order={order}
            onChangeSearch={onChangeSearch}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
            search={search}
            type={type}
            onChangeType={onChangeType}
        />
    );
});
