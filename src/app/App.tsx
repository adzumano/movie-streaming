import classNames from 'classnames';
import { Suspense } from 'react';

export const App = () => {
    return (
        <div className={'app'}>
            <Suspense fallback={'loading..'}>App</Suspense>
        </div>
    );
};
