import { ReactNode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (component: () => ReactNode) => () =>
    (
        <BrowserRouter>
            <Suspense fallback={'router loading ...'}>{component()}</Suspense>
        </BrowserRouter>
    );
