import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { ArticleType } from '@/entities/Article';

interface ArticleTypeTabsProps {
    className?: string;
    type: ArticleType;
    onChangeType: (tab: TabItem<ArticleType>)=> void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const {
        className,
        type,
        onChangeType,
    } = props;
    const { t } = useTranslation('articles');

    const tabs = useMemo<TabItem<ArticleType>[]>(() => {
        const tabsTranslate = {
            [ArticleType.ALL]: t('Все статьи'),
            [ArticleType.ECONOMICS]: t('Экономика'),
            [ArticleType.IT]: t('Айти'),
            [ArticleType.SCIENCE]: t('Наука'),
        };
        return Object.values(ArticleType).map((type) => ({ content: tabsTranslate[type], value: type }));
    }, [t]);

    return (
        <Tabs
            className={classNames('', {}, [className])}
            tabs={tabs}
            value={type}
            onTabClick={onChangeType}
        />
    );
});
