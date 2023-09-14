import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/Popups/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom left',
    value: '123456',
    items: [
        { value: 'string', content: 'content 1 value string' },
        { value: 'string1', content: 'content 1 value string1' },
        { value: 'string2', content: 'content 2 value string2' },
        { value: 'string3', content: 'content 3 value string3' },
    ],
    readonly: false,
};
BottomLeft.decorators = [];

export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottom right',
    value: '123456',
    items: [
        { value: 'string', content: 'content 1 value string' },
        { value: 'string1', content: 'content 1 value string1' },
        { value: 'string2', content: 'content 2 value string2' },
        { value: 'string3', content: 'content 3 value string3' },
    ],
    readonly: false,
};
BottomRight.decorators = [];

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top left',
    value: '123456',
    items: [
        { value: 'string', content: 'content 1 value string' },
        { value: 'string1', content: 'content 1 value string1' },
        { value: 'string2', content: 'content 2 value string2' },
        { value: 'string3', content: 'content 3 value string3' },
    ],
    readonly: false,
};
TopLeft.decorators = [];

export const TopRight = Template.bind({});
TopRight.args = {
    direction: 'top right',
    value: '123456',
    items: [
        { value: 'string', content: 'content 1 value string' },
        { value: 'string1', content: 'content 1 value string1' },
        { value: 'string2', content: 'content 2 value string2' },
        { value: 'string3', content: 'content 3 value string3' },
    ],
    readonly: false,
};
TopRight.decorators = [];
