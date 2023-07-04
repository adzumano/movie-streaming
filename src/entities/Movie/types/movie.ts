import { IResponse, Replace } from 'shared/types';

export interface IMovie {
    id: string;
    name: string;
    url: string;
    date: Date;
    genre: string;
}

export type TMovieSchema = Replace<IResponse<IMovie[]>, 'results', IMovie[]>;
