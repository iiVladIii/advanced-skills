import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { EditableProfileCard } from './EditableProfileCard';

export default {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
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
})];

export const Editable = Template.bind({});
Editable.args = {};
Editable.decorators = [StoreDecorator({
    profile: {
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
    },
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
    profile: {
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
    },
})];

export const Loading = Template.bind({});
Loading.args = {};

Loading.decorators = [StoreDecorator({
    profile: {
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
    },
})];
