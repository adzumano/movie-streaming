import compose from 'compose-function';

import { withErrorBoundary } from './ErrorBoundary';
import { withRouter } from './router';
import { withStore } from './store';

export const withProviders = compose(withErrorBoundary, withRouter, withStore);
