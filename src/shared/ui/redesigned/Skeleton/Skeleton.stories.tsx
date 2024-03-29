import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Skeleton } from './Skeleton';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/redesigned/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
    <Skeleton {...args} />
);

export const Normal = Template.bind({});
Normal.decorators = [];
Normal.args = {
    width: '100%',
    height: 200,
};

export const Circle = Template.bind({});
Circle.args = {
    borderRadius: '50%',
    width: 50,
    height: 50,
};

export const CircleDark = Template.bind({});
CircleDark.args = {
    borderRadius: '50%',
    width: 50,
    height: 50,
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NormalDark = Template.bind({});
NormalDark.args = {
    width: '100%',
    height: 200,
};

NormalDark.decorators = [ThemeDecorator(Theme.DARK)];
