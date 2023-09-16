import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from './Text';

export default {
    title: 'shared/redesigned/Text',
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Primary',
    text: 'Description Description Description',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Error',
    text: 'Description Description Description',
    variant: 'error',
};

export const Accent = Template.bind({});
Accent.args = {
    title: 'Accent',
    text: 'Description Description Description',
    variant: 'error',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'title',
    variant: 'accent',
    text: 'Description Description Description',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Description Description Description',
};

export const SizeS = Template.bind({});
SizeS.args = {
    size: 's',
    title: 'title',
    text: 'Description Description Description',
};

export const SizeL = Template.bind({});
SizeL.args = {
    size: 'l',
    title: 'title',
    text: 'Description Description Description',
};

export const SizeM = Template.bind({});
SizeM.args = {
    size: 'm',
    title: 'title',
    text: 'Description Description Description',
};
