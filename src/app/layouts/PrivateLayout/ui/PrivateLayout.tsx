import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'widgets/Header';

export const PrivateLayout = () => {
    return (
        <>
            <Header />
            <Suspense fallback={'loading..'}>
                <Outlet />
            </Suspense>
        </>
    );
};
