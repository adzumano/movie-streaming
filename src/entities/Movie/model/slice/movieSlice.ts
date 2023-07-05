import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import Movie1 from 'shared/assets/img/movie_1.png';
import Movie2 from 'shared/assets/img/movie_2.png';

import { TMovieSchema } from '../../types/movie';

const initialState: TMovieSchema = {
    next: '',
    previous: '',
    count: 0,
    results: [
        {
            id: nanoid(),
            name: 'Bullet science',
            url: Movie1,
            date: '2022',
            genre: 'Action comedy',
            duration: 200,
            rating: 7.5,
            description:
                'The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.',
            isFavorite: false,
        },
        {
            id: nanoid(),
            name: 'House of Gucci',
            url: Movie2,
            date: '2023',
            genre: 'Drama',
            duration: 120,
            rating: 8.3,
            description:
                'The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.',
            isFavorite: true,
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

export const { reducer: movieReducer } = movieSlice;
