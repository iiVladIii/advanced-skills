import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ProfileCard } from './ProfileCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Profile/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

const primaryArgs = {
    readonly: true,
    data: {
        first: 'name',
        city: 'City',
        age: 20,
        avatar: 'static/assets/avatar.jpeg',
        lastname: 'lastname',
        currency: Currency.RUB,
        country: Country.Russia,
    },
};
export const Primary = Template.bind({});
Primary.args = primaryArgs;

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = primaryArgs;
PrimaryRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const Editable = Template.bind({});
Editable.args = {
    readonly: false,
    data: {
        first: 'name',
        city: 'City',
        age: 20,
        avatar: 'static/assets/avatar.jpeg',
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
        avatar: 'static/assets/avatar.jpeg',
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
        avatar: 'static/assets/avatar.jpeg',
        lastname: 'lastname',
        currency: Currency.RUB,
        country: Country.Russia,
    },
};
