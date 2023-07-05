import { AppRouter } from 'app/providers/router';
import { Suspense } from 'react';
import { Header } from 'widgets/Header';

export const PrivateLayout = () => {
    return (
        <>
            <Header />
            <Suspense fallback={'loading..'}>
                <AppRouter />
            </Suspense>
        </>
    );
};
