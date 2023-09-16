import { useTranslation } from 'react-i18next';
import { ReactNode, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '../Card/Card';
import cls from './Tabs.module.scss';
import { Flex } from '../Stack/Flex/Flex';
import {
    FlexDirection,
    FlexGap,
    FlexJustify,
    FlexAlign,
} from '../Stack/types/types';

export interface TabItem<T> {
    value: T;
    content: ReactNode;
}

interface FlexProps {
    direction?: FlexDirection;
    gap?: FlexGap;
    align?: FlexAlign;
    justify?: FlexJustify;
}
interface TabsProps<T> extends FlexProps {
    className?: string;
    tabs: TabItem<T>[];
    value: T;
    onTabClick: (tab: TabItem<T>) => void;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const {
        className,
        tabs,
        value,
        onTabClick,
        direction,
        gap = '8',
        align,
        justify,
    } = props;

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
                {tabs.map((tab) => {
                    const isSelected = tab.value === value;
                    return (
                        <Card
                            variant={isSelected ? 'light' : 'normal'}
                            className={classNames(cls.tab, {
                                [cls.selected]: isSelected,
                            })}
                            key={tab.value}
                            onClick={clickHandle(tab)}
                            border="40"
                        >
                            {tab.content}
                        </Card>
                    );
                })}
            </>
        ),
        [clickHandle, tabs, value],
    );
    return (
        <Flex
            direction={direction}
            gap={gap}
            align={align}
            justify={justify}
            className={classNames(cls.Tabs, {}, [className])}
        >
            {cards}
        </Flex>
    );
};
