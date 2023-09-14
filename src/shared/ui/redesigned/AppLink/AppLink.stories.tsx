import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink } from './AppLink';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/redesigned/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '',
        children: 'link',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    variant: 'primary',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    variant: 'primary',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedLight = Template.bind({});
RedLight.args = {
    variant: 'red',
};

export const RedDark = Template.bind({});
RedDark.args = {
    variant: 'red',
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];
