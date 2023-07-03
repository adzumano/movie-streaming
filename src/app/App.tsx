import { AppRouter } from 'app/providers/router';
import { Suspense, useEffect } from 'react';
import { KVStorage, LocalStorage } from 'shared/lib/storage';
import { Header } from 'widgets/Header';

export const App = () => {
    const storage = new KVStorage(new LocalStorage());

    useEffect(() => {
        storage.set('key', 'value');
        console.log(storage.get('key'));
    }, []);
    return (
        <div className={'app'}>
            <Header />
            <Suspense fallback={'loading..'}>
                <AppRouter />
                <div>test</div>
            </Suspense>
        </div>
    );
};
