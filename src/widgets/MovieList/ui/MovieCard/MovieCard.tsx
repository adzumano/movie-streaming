import classNames from 'classnames';
import { AddToFavorite } from 'features/AddToFavorite';
import { FC } from 'react';
import { Heading } from 'shared/ui';

import styles from './MovieCard.module.scss';

interface IMovieCardProps {
    url: string;
    genre: string;
    date: string;
    name: string;
}
export const MovieCard: FC<IMovieCardProps> = (props) => {
    const { url, name, date, genre } = props;
    return (
        <div
            className={classNames(styles.card)}
            style={{
                backgroundImage: `url(${url})`,
            }}
        >
            <div className={styles.heart}>
                <AddToFavorite isFavorite={true} />
            </div>
            <div className={styles.description}>
                <Heading level={'h6'}>{name}</Heading>
                <Heading className={styles.info} level={'p'}>
                    {date} | {genre}
                </Heading>
            </div>
        </div>
    );
};
