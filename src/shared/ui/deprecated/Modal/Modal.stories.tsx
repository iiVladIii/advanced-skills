import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cum cumque dicta error eum facilis in labore laudantium maiores maxime officia optio placeat porro, quae quam quas reiciendis rem vel. Facere placeat porro quidem repellendus! Adipisci alias architecto at consequatur dolore dolorem est exercitationem, fugit illo inventore laboriosam magni minima modi nobis officia, perspiciatis praesentium quia quibusdam sint tempora tenetur velit, voluptates. Commodi doloremque iure magnam nemo ratione voluptatem voluptatum. Ab fugiat fugit optio quibusdam quo vero! Amet aspernatur, corporis ducimus excepturi harum molestias nihil nisi nulla possimus quibusdam quidem tempore tenetur veniam. At culpa iure quae saepe temporibus ut.',
        isOpen: true,
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalLight = Template.bind({});
ModalLight.args = {};
ModalLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const ModalDark = Template.bind({});
ModalDark.args = {};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
