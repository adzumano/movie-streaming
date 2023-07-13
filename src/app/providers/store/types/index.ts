import { AxiosInstance } from 'axios';
import { IMovie, TMovieSchema } from 'entities/Movie';

export interface IStateSchema {
    movies: TMovieSchema;
    movieDetail: IMovie;
}

export interface IThunkExtraArg {
    api: AxiosInstance;
}
