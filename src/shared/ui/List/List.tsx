import classNames from 'classnames';
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

interface IListProps<Item, As extends ElementType> {
    className?: string;
    items: Item[];
    renderItem: (item: Item) => ReactNode;
    as?: As;
}
export function List<Item, As extends ElementType>(
    props: IListProps<Item, As> & Omit<ComponentPropsWithoutRef<As>, keyof IListProps<Item, As>>,
) {
    const { className, items, renderItem, as } = props;
    const Component = as ?? 'ul';
    return <Component className={classNames(className)}>{items.map(renderItem)}</Component>;
}
