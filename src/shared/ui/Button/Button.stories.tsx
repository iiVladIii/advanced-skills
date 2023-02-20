import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ClearLight = Template.bind({});
ClearLight.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
ClearLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlinedLight = Template.bind({});
OutlinedLight.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
OutlinedLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    children: 'Text',
};
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};
BackgroundTheme.decorators = [ThemeDecorator(Theme.LIGHT)];

export const BackgroundThemeInverted = Template.bind({});
BackgroundThemeInverted.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundThemeInverted.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    square: true,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
};
// ClearInverted.decorators = [ThemeDecorator(Theme.DARK)];
