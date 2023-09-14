import { useTranslation } from 'react-i18next';
import { ReactNode, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem<T> {
    value: T;
    content: ReactNode;
}

interface TabsProps<T> {
    className?: string;
    tabs: TabItem<T>[];
    value: T;
    onTabClick: (tab: TabItem<T>) => void;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const { className, tabs, value, onTabClick } = props;

    const clickHandle = useCallback(
        (tab: TabItem<T>) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    const { t } = useTranslation();

    const cards = useMemo(
        () => (
            <>
                {tabs.map((tab) => (
                    <Card
                        theme={
                            tab.value === value
                                ? CardTheme.NORMAL
                                : CardTheme.OUTLINED
                        }
                        className={cls.tab}
                        key={tab.value}
                        onClick={clickHandle(tab)}
                    >
                        {tab.content}
                    </Card>
                ))}
            </>
        ),
        [clickHandle, tabs, value],
    );
    return <div className={classNames(cls.Tabs, {}, [className])}>{cards}</div>;
};
