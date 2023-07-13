import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { movieDetailReducer, movieReducer } from 'entities/Movie';
import { $api } from 'shared/api/api';

import { IStateSchema, IThunkExtraArg } from '../types';

export const createReduxStore = () => {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        movies: movieReducer,
        movieDetail: movieDetailReducer,
    };

    const extraArgument: IThunkExtraArg = {
        api: $api,
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
