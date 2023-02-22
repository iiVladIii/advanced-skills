import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    loginForm: {
        username: 'name',
        password: 'pass',
    },
})];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorator({
    loginForm: {
        username: 'name',
        password: 'pass',
        error: 'Error',
    },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    loginForm: {
        isLoading: true,
    },
})];
