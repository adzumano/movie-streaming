import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';

const meta = {
    title: 'shared/Heading',
    component: Heading,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        level: 'p',
        children: 'Text',
    },
};

export const Level1: Story = {
    args: {
        level: 'h1',
        children: 'Text',
    },
};

export const Level2: Story = {
    args: {
        level: 'h2',
        children: 'Text',
    },
};

export const Level3: Story = {
    args: {
        level: 'h3',
        children: 'Text',
    },
};

export const Level4: Story = {
    args: {
        level: 'h4',
        children: 'Text',
    },
};

export const Level5: Story = {
    args: {
        level: 'h5',
        children: 'Text',
    },
};

export const Level6: Story = {
    args: {
        level: 'h6',
        children: 'Text',
    },
};
