import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'widgets/Header';

import styles from './PrivateLayout.module.scss';

export const PrivateLayout = () => {
    return (
        <main className={styles.layout}>
            <Header />
            <Suspense fallback={'loading..'}>
                <Outlet />
            </Suspense>
        </main>
    );
};
