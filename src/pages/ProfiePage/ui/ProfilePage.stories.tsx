import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import ProfilePage from './ProfilePage';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [],
    parameters: {
        mockData: [
            {
                url: `${__API__}/profile-ratings?userId=1&profileId=1`,
                method: 'GET',
                status: 200,
                response: [{ rate: 4 }],
                delay: 2000,
            },
        ],
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.parameters = {};
Light.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
        profile: {
            readonly: true,
            form: {
                first: 'name',
                city: 'City',
                age: 20,
                avatar: 'static/assets/avatar.jpeg',
                lastname: 'lastname',
                currency: Currency.RUB,
                country: Country.Russia,
            },
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    StoreDecorator({
        profile: {
            readonly: false,
            form: {
                first: 'name',
                city: 'City',
                age: 20,
                avatar: 'static/assets/avatar.jpeg',
                lastname: 'lastname',
                currency: Currency.RUB,
                country: Country.Russia,
            },
        },
    }),
];
