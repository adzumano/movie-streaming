import { getAllMoviesSelector } from 'entities/Movie';
import React from 'react';
import { useSelector } from 'react-redux';
import { List } from 'shared/ui';

import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = () => {
    const { results } = useSelector(getAllMoviesSelector);
    return (
        <List
            items={results}
            renderItem={(movie) => (
                <li key={movie.id}>
                    <MovieCard url={movie.url} name={movie.name} date={movie.date} genre={movie.genre} />
                </li>
            )}
        />
    );
};
