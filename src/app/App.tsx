import { AppRouter } from 'app/providers/router';
import { Suspense } from 'react';
import { Header } from 'widgets/Header';

export const App = () => {
    return (
        <div className={'app'}>
            <Header />
            <Suspense fallback={'loading..'}>
                <AppRouter />
            </Suspense>
        </div>
    );
};
