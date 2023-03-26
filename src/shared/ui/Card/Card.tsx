import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, memo, ReactNode } from 'react';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    children:ReactNode;
    className?: string;
    theme?: CardTheme;
}

export const Card = memo((props: CardProps) => {
    const {
        children,
        className,
        theme = CardTheme.NORMAL,
        ...otherProps
    } = props;

    return (
        <div
            {...otherProps}
            className={classNames(cls.Card, {}, [className, cls[theme]])}
        >
            {children}
        </div>
    );
});
