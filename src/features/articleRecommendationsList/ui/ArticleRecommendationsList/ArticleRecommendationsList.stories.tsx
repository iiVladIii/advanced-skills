import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from '@/entities/Article';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const article: Article = {
    title: '123',
    blocks: [],
    id: '1',
    img: '',
    views: 102,
    user: { id: '1', username: 'username' },
    createdAt: '',
    type: [],
    subtitle: 'sdaseqdfasdsadqd',
};
export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    decorators: [StoreDecorator({})],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => (
    <ArticleRecommendationsList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=4&_expand=user`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
                { ...article, id: '2' },
                { ...article, id: '3' },
                { ...article, id: '4' },
            ],
        },
    ],
};
