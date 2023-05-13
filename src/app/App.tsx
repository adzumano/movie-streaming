import classNames from 'classnames';
import { Suspense } from 'react';

export const App = () => {
    const test = '';
    return (
        <div className={'app'}>
            <Suspense fallback={'loading..'}>App</Suspense>
        </div>
    );
};
