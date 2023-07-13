import { IStateSchema } from 'app/providers/store/types';

export const getAllMoviesSelector = (state: IStateSchema) => state.movies;
