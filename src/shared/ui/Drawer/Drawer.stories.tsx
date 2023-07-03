import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Drawer } from './Drawer';
import { StopAnimationDecorator } from '@/shared/config/storybook/StopAnimationDecorator/StopAnimationDecorator';

export default {
    title: 'shared/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    // parameters: {
    //     loki: { skip: true },
    // },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    isOpen: true,
};
Normal.decorators = [StopAnimationDecorator];
