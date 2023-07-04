import { configureStore } from '@reduxjs/toolkit';
import { NavigateOptions, To } from 'react-router-dom';
import { $api } from 'shared/api/api';

import { IThunkExtraArg } from '../types/store';

const rootReducer = {};

export const createReduxStore = (navigate?: (to: To, options?: NavigateOptions) => void) => {
    const extraArgument: IThunkExtraArg = {
        api: $api,
        navigate,
    };

    return configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument,
                },
            }),
    });
};
