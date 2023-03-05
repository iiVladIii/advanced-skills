import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import Avatar from 'shared/assets/tests/avatar.jpeg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    readonly: true,
    data: {
        first: 'name',
        city: 'City',
        age: 20,
        avatar: Avatar,
        lastname: 'lastname',
        currency: Currency.RUB,
        country: Country.Russia,
    },
};

export const Editable = Template.bind({});
Editable.args = {
    readonly: false,
    data: {
        first: 'name',
        city: 'City',
        age: 20,
        avatar: Avatar,
        lastname: 'lastname',
        currency: Currency.RUB,
        country: Country.Russia,
    },
};

export const Error = Template.bind({});
Error.args = {
    readonly: false,
    error: 'Error',
    data: {
        first: 'name',
        city: 'City',
        age: 20,
        avatar: Avatar,
        lastname: 'lastname',
        currency: Currency.RUB,
        country: Country.Russia,
    },
};

export const Loading = Template.bind({});
Loading.args = {
    readonly: false,
    isLoading: true,
    data: {
        first: 'name',
        city: 'City',
        age: 20,
        avatar: Avatar,
        lastname: 'lastname',
        currency: Currency.RUB,
        country: Country.Russia,
    },
};
