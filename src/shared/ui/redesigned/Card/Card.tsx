import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';

export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = '0' | '12' | '24' | '40';

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': cls.gap_0,
    '8': cls.gap_8,
    '16': cls.gap_16,
    '24': cls.gap_24,
};

const mapBorderToClass: Record<CardBorder, string> = {
    '0': cls.border_0,
    '12': cls.border_12,
    '24': cls.border_24,
    '40': cls.border_40,
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    variant?: CardVariant;
    fullWidth?: boolean;
    fullHeight?: boolean;
    padding?: CardPadding;
    border?: CardBorder;
}

export const Card = memo((props: CardProps) => {
    const {
        children,
        className,
        variant = 'normal',
        fullWidth,
        padding = '8',
        border = '12',
        fullHeight,
        ...otherProps
    } = props;

    const paddings = mapPaddingToClass[padding];
    const borders = mapBorderToClass[border];

    return (
        <div
            {...otherProps}
            className={classNames(
                cls.Card,
                {
                    [cls.fullWidth]: fullWidth,
                    [cls.fullHeight]: fullHeight,
                },
                [cls[variant], paddings, borders, className],
            )}
        >
            {children}
        </div>
    );
});
