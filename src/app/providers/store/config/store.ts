import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { movieDetailReducer, movieReducer } from 'entities/Movie';
import { NavigateOptions, To } from 'react-router-dom';
import { $api } from 'shared/api/api';

import { IStateSchema, IThunkExtraArg } from '../types/store';

export const createReduxStore = (navigate?: (to: To, options?: NavigateOptions) => void) => {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        movies: movieReducer,
        movieDetail: movieDetailReducer,
    };

    const extraArgument: IThunkExtraArg = {
        api: $api,
        navigate,
    };

    return configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument,
                },
            }),
    });
};
