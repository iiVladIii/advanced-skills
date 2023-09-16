import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';

export type CardPadding = '0' | '8' | '16' | '24';

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': cls.gap_0,
    '8': cls.gap_8,
    '16': cls.gap_16,
    '24': cls.gap_24,
};
interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    variant?: CardVariant;
    fullWidth?: boolean;
    padding?: CardPadding;
}

export const Card = memo((props: CardProps) => {
    const {
        children,
        className,
        variant = 'normal',
        fullWidth,
        padding = '8',
        ...otherProps
    } = props;

    const paddings = mapPaddingToClass[padding];

    return (
        <div
            {...otherProps}
            className={classNames(
                cls.Card,
                {
                    [cls.fullWidth]: fullWidth,
                },
                [cls[variant], paddings, className],
            )}
        >
            {children}
        </div>
    );
});
