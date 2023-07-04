import { createSlice } from '@reduxjs/toolkit';
import { TMovieSchema } from 'entities/Movie';
import { nanoid } from 'nanoid';
import Movie1 from 'shared/assets/img/movie_1.png';
import Movie2 from 'shared/assets/img/movie_2.png';

const initialState: TMovieSchema = {
    next: '',
    previous: '',
    count: 0,
    results: [
        {
            id: nanoid(),
            name: 'Bullet science',
            url: Movie1,
            date: new Date(),
            genre: 'Action comedy',
        },
        {
            id: nanoid(),
            name: 'House of Gucci',
            url: Movie2,
            date: new Date(),
            genre: 'Drama',
        },
    ],
    params: {
        offset: 0,
        limit: 10,
    },
};

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
});

export const { reducer: movieReducer, actions: movieActions } = movieSlice;
