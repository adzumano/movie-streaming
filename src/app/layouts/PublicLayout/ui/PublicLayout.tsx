import { AppRouter } from 'app/providers/router';

import styles from './PublicLayout.module.scss';

export const PublicLayout = () => {
    return (
        <div className={styles.public}>
            <AppRouter />
        </div>
    );
};
