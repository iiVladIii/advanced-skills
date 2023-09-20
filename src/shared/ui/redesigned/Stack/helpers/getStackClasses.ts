import cls from '../Flex/Flex.module.scss';
import {
    FlexAlign,
    FlexDirection,
    FlexGap,
    FlexJustify,
    FlexWrap,
    StackOptions,
} from '../types/types';

export const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    end: cls.justifyEnd,
    center: cls.justifyCenter,
    between: cls.justifyBetween,
};

export const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    end: cls.alignEnd,
    center: cls.alignCenter,
};

export const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

export const wrapClasses: Record<FlexWrap, string> = {
    wrap: cls.wrap,
    nowrap: cls.nowrap,
};

export const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    24: cls.gap24,
    32: cls.gap32,
};

interface GetStackClassesOptions extends StackOptions {
    direction: FlexDirection;
}

export const getStackClasses = ({
    justify = 'start',
    align = 'center',
    gap,
    direction,
    wrap = 'nowrap',
    max = false,
}: GetStackClassesOptions) => [
    cls.Flex,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    wrapClasses[wrap],
    gap && gapClasses[gap],
    max && cls.max,
];
