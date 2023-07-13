import { IStateSchema } from 'app/providers/store/types';

export const getSelectedMovieDetailSelector = (state: IStateSchema) => state.movieDetail;
