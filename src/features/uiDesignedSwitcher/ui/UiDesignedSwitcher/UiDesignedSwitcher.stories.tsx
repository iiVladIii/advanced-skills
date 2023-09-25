import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UiDesignedSwitcher } from './UiDesignedSwitcher';

export default {
    title: '___/UiDesignedSwitcher',
    component: UiDesignedSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UiDesignedSwitcher>;

const Template: ComponentStory<typeof UiDesignedSwitcher> = (args) => (
    <UiDesignedSwitcher {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [];
