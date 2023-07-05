import { getSelectedMovieDetailSelector } from 'entities/Movie';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import { MovieImage } from '../MovieImage/MovieImage';
import styles from './MovieDetail.module.scss';

export const MovieDetail: FC = () => {
    const movie = useSelector(getSelectedMovieDetailSelector);
    return (
        <div className={styles.detail}>
            <MovieImage url={movie.url} name={movie.name} />
        </div>
    );
};
