import type { Meta, StoryObj } from '@storybook/react';
import { nanoid } from 'nanoid';

import { List } from './List';

const mockData = [{ id: nanoid() }, { id: nanoid() }, { id: nanoid() }, { id: nanoid() }];

const meta = {
    title: 'shared/List',
    component: List,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: mockData,
        renderItem: (item: any) => <li>List {item.id}</li>,
    },
};
