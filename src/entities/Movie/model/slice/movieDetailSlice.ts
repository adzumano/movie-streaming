import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IMovie } from '../../types/movie';

const initialState: IMovie = {
    id: '',
    name: '',
    url: '',
    date: '',
    genre: '',
    duration: 0,
    rating: 0,
    description: '',
    isFavorite: false,
};

export const movieDetailSlice = createSlice({
    name: 'movieDetail',
    initialState,
    reducers: {
        selectedMovie(state, action: PayloadAction<IMovie>) {
            state = { ...action.payload };
        },
    },
});

export const { reducer: movieDetailReducer, actions: movieDetailActions } = movieDetailSlice;
