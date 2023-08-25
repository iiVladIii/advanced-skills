import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
    ArticleBlockType,
    ArticleType,
    ArticleView,
} from '../../model/consts/articleConsts';
import { Article } from '../../model/types/article';
import { ArticleListItem } from './ArticleListItem';

export default {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItem>;

const article: Article = {
    id: '1',
    user: {
        id: '1',
        username: 'username',
    },
    title: 'JavaScript news',
    subtitle: 'Что нового в js pf 2022 год ?',
    img: 'https://i.pinimg.com/originals/68/d9/1a/68d91a4a0c40857674fbd3a22b9f0b03.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ],
        },
    ],
};

const Template: ComponentStory<typeof ArticleListItem> = (args) => (
    <ArticleListItem {...args} />
);

export const Big = Template.bind({});
Big.args = {
    view: ArticleView.BIG,
    article,
};
Big.decorators = [];

export const Small = Template.bind({});
Small.args = {
    view: ArticleView.SMALL,
    article,
};
Small.decorators = [];
