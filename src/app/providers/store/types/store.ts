import { AxiosInstance } from 'axios';
import { TMovieSchema } from 'entities/Movie';
import { NavigateOptions, To } from 'react-router-dom';

export interface IStateSchema {
    movies: TMovieSchema;
}

export interface IThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}
