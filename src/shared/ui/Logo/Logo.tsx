import { ReactComponent as CoffeeIcon } from 'shared/assets/svg/coffee.svg';
import { Heading } from 'shared/ui';

import styles from './Logo.module.scss';

export const Logo = () => {
    return (
        <div className={styles.logo}>
            <CoffeeIcon />
            <Heading className={styles.title} level={'h3'}>
                watch
            </Heading>
        </div>
    );
};
