import { IResponse, Replace } from 'shared/types';

export interface IMovie {
    id: string;
    name: string;
    url: string;
    date: string;
    genre: string;
    rating: number;
    duration: number;
    description: string;
    isFavorite: boolean;
}

export type TMovieSchema = Replace<IResponse<IMovie[]>, 'results', IMovie[]>;
