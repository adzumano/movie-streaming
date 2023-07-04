import { IStateSchema } from 'app/providers/store/types/store';

export const getAllMoviesSelector = (state: IStateSchema) => state.movies;
