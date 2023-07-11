import cn from 'classnames';
import { nanoid } from 'nanoid';
import { FC, memo } from 'react';
import { List } from 'shared/ui';

import cls from './Header.module.scss';

interface NavbarProps {
    className?: string;
}

const links = [
    { id: nanoid(), text: 'Movies' },
    { id: nanoid(), text: 'Series' },
    { id: nanoid(), text: 'Documentaries' },
];
export const Header: FC<NavbarProps> = memo(({ className }) => {
    return (
        <header className={cn(cls.header, className)}>
            <nav>
                <List items={links} renderItem={({ id, text }) => <li key={id}>{text}</li>} />
            </nav>
        </header>
    );
});
