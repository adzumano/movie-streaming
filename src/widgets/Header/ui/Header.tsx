import cn from 'classnames';
import { FC, memo } from 'react';

import cls from './Header.module.scss';

interface NavbarProps {
    className?: string;
}
export const Header: FC<NavbarProps> = memo(({ className }) => {
    return <header className={cn(cls.Header, className)}>Header</header>;
});
