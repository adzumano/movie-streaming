import cn from 'classnames';
import { FC, memo } from 'react';
import { HeaderActions } from 'widgets/Header/ui/HeaderActions/HeaderActions';

import { HeaderNavigation } from '../HeaderNavigation/HeaderNavigation';
import styles from './Header.module.scss';

interface NavbarProps {
    className?: string;
}

export const Header: FC<NavbarProps> = memo(({ className }) => {
    return (
        <header className={cn(styles.header, className)}>
            <HeaderNavigation />
            <HeaderActions />
        </header>
    );
});
