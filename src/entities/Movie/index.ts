export { TMovieSchema, IMovie } from './types/movie';
export { getAllMoviesSelector } from './model/selectors/getAllMoviesSelector/getAllMoviesSelector';
export { movieReducer } from './model/slice/movieSlice';
export { movieDetailReducer, movieDetailActions } from './model/slice/movieDetailSlice';
export { getSelectedMovieDetailSelector } from './model/selectors/getSelectedMovieDetailSelector/getSelectedMovieDetailSelector';
