import { getAllMoviesSelector } from 'entities/Movie';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Heading, List } from 'shared/ui';

import { MovieCard } from '../MovieCard/MovieCard';
import styles from './MovieList.module.scss';

interface IMovieListProps {
    title?: string;
}
export const MovieList: FC<IMovieListProps> = (props) => {
    const { title } = props;
    const { results } = useSelector(getAllMoviesSelector);
    return (
        <div>
            {title ? (
                <Heading className={styles.title} level={'h4'}>
                    {title}
                </Heading>
            ) : null}
            <List
                className={styles.list}
                items={results}
                renderItem={(movie) => (
                    <li key={movie.id}>
                        <MovieCard url={movie.url} name={movie.name} date={movie.date} genre={movie.genre} />
                    </li>
                )}
            />
        </div>
    );
};
