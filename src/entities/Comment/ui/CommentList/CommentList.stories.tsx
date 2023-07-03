import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            user: {
                id: '1',
                avatar: 'static/assets/avatar-2.webp',
                username: 'username',
            },
            text: 'comment text',
        },
        {
            id: '2',
            user: {
                id: '2',
                avatar: 'static/assets/avatar.jpeg',
                username: 'username - 2',
            },
            text: 'comment text - 2',
        },
    ],
};
Normal.decorators = [];

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
Loading.decorators = [];
