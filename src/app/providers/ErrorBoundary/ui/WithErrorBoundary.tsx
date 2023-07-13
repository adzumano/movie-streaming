import { ReactNode } from 'react';

import { ErrorBoundary } from './ErrorBoundary';

export const withErrorBoundary = (component: () => ReactNode) => () =>
    <ErrorBoundary>{component()}</ErrorBoundary>;
