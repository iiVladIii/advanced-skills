import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    tabs: [
        { value: 'tab_1', content: 'tab_1' },
        { value: 'tab_2', content: 'tab_2' },
        { value: 'tab_3', content: 'tab_3' },
    ],
    value: 'tab_2',
    onTabClick: action('onTabClick'),
};
Normal.decorators = [];
