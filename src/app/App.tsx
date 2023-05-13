import { AppRouter } from 'app/provider/router';
import { Suspense } from 'react';

export const App = () => {
    return (
        <div className={'app'}>
            <Suspense fallback={'loading..'}>
                App
                <AppRouter />
            </Suspense>
        </div>
    );
};
