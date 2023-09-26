import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

const normalArgs = {
    comment: {
        id: '1',
        user: {
            id: '1',
            avatar: 'static/assets/avatar-2.webp',
            username: 'username',
        },
        text: 'comment text',
    },
};

export const Normal = Template.bind({});
Normal.args = normalArgs;
Normal.decorators = [];

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = normalArgs;
NormalRedesigned.decorators = [NewDesignDecorator];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
    comment: {
        id: '1',
        user: {
            id: '1',
            avatar: 'static/assets/avatar.jpeg',
            username: 'username',
        },
        text: 'comment text',
    },
};
Loading.decorators = [];
