import { App } from 'app/App';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/store';
import 'app/styles/index.scss';
import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'shared/config/i18n/i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StrictMode>
        <ErrorBoundary>
            <BrowserRouter>
                <StoreProvider>
                    <Suspense fallback={'loading..'}>
                        <App />
                    </Suspense>
                </StoreProvider>
            </BrowserRouter>
        </ErrorBoundary>
    </StrictMode>,
);
