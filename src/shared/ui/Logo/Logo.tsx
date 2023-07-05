import classNames from 'classnames';
import { FC } from 'react';
import { ReactComponent as CoffeeIcon } from 'shared/assets/svg/coffee.svg';
import { Heading } from 'shared/ui';

import styles from './Logo.module.scss';

interface ILogoProps {
    className?: string;
}
export const Logo: FC<ILogoProps> = ({ className }) => {
    return (
        <div className={classNames(styles.logo, className)}>
            <CoffeeIcon />
            <Heading className={styles.title} level={'h3'}>
                watch
            </Heading>
        </div>
    );
};
