import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { createReduxStore } from '../config/store';

export const withStore = (component: () => ReactNode) => () => {
    const store = createReduxStore();
    return <Provider store={store}>{component()}</Provider>;
};
