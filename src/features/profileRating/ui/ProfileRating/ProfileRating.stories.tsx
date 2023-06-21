import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProfileRating from './ProfileRating';

export default {
    title: '___/ArticleRating',
    component: ProfileRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => <ProfileRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [];
