import type { Meta, StoryObj } from '@storybook/react';
import {List} from "./List";
import {nanoid} from "nanoid";

const mockData = [
    {id: nanoid()},
    {id: nanoid()},
    {id: nanoid()},
    {id: nanoid()},
]

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
        renderItem: (item: any) => (
            <li>List {item.id}</li>
        )
    },
};

