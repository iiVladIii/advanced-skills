import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import Avatar from '@/shared/assets/tests/avatar.jpeg';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import ProfilePage from './ProfilePage';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },

} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    profile: {
        readonly: true,
        form: {
            first: 'name',
            city: 'City',
            age: 20,
            avatar: Avatar,
            lastname: 'lastname',
            currency: Currency.RUB,
            country: Country.Russia,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(
    {
        profile: {
            readonly: false,
            form: {
                first: 'name',
                city: 'City',
                age: 20,
                avatar: Avatar,
                lastname: 'lastname',
                currency: Currency.RUB,
                country: Country.Russia,
            },
        },
    },
)];
