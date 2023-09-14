import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppImage } from './AppImage';
import { Skeleton } from '../Skeleton';

export default {
    title: 'shared/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    parameters: {
        loki: { skip: true },
    },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => (
    <AppImage {...args} />
);

export const Normal = Template.bind({});

Normal.args = {
    src: 'static/assets/avatar.jpeg',
    fallback: <Skeleton />,
    errorFallback: <div>error to load</div>,
    style: { width: 300, height: 300 },
};

Normal.decorators = [];
