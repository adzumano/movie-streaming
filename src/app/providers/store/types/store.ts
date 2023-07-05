import { AxiosInstance } from 'axios';
import { IMovie, TMovieSchema } from 'entities/Movie';
import { NavigateOptions, To } from 'react-router-dom';

export interface IStateSchema {
    movies: TMovieSchema;
    movieDetail: IMovie;
}

export interface IThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}
