import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    memo, ReactNode, useCallback, useMemo,
} from 'react';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem<T> {
    value: T;
    content: ReactNode;
}

interface TabsProps<T> {
    className?: string;
    tabs: TabItem<T>[];
    value: T;
    onTabClick: (tab: TabItem<T>) => void
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const {
        className,
        tabs,
        value,
        onTabClick,
    } = props;

    const clickHandle = useCallback((tab: TabItem<T>) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    const { t } = useTranslation();

    const cards = useMemo(() => (
        <>
            {
                tabs.map((tab) => (
                    <Card
                        theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                        className={cls.tab}
                        key={tab.value}
                        onClick={clickHandle(tab)}
                    >
                        {tab.content}
                    </Card>
                ))
            }
        </>
    ), [clickHandle, tabs, value]);
    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {cards}
        </div>
    );
};
