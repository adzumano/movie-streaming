import { IStateSchema } from 'app/providers/store/types/store';

export const getSelectedMovieDetailSelector = (state: IStateSchema) => state.movieDetail;
