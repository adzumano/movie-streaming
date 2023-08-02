import type { Meta, StoryObj } from '@storybook/react';
import {Avatar} from "./Avatar";
import AvatarImg from 'shared/assets/img/avatar.png'

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: AvatarImg,
        alt: 'Image',
        size: 32
    },
};

