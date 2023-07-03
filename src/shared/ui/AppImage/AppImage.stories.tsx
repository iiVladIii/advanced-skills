import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppImage } from './AppImage';
import { Skeleton } from '../Skeleton';
import Avatar from '../../../../config/storybook/static/assets/avatar.jpeg';

export default {
    title: 'shared/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    src: Avatar,
    fallback: <Skeleton />,
    errorFallback: <div>error to load</div>,
    style: { width: 300, height: 300 },
};

Normal.decorators = [];

export const ErrorFallback = Template.bind({});
ErrorFallback.args = {
    src: '.',
    errorFallback: <div>error to load</div>,
};
ErrorFallback.decorators = [];
