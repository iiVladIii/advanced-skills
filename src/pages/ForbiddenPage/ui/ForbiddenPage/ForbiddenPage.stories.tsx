import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ForbiddenPage from './ForbiddenPage';

export default {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
    decorators: [StoreDecorator({})],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = (args) => <ForbiddenPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [];
