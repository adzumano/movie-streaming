import classNames from 'classnames';
import dayjs from 'dayjs';
import React, { FC } from 'react';
import { Heading } from 'shared/ui';

import styles from './MovieCard.module.scss';

interface IMovieCardProps {
    url: string;
    genre: string;
    date: Date;
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
            <div className={styles.description}>
                <Heading level={'h6'}>{name}</Heading>
                <Heading className={styles.info} level={'p'}>
                    {dayjs(date).format('YYYY')} | {genre}
                </Heading>
            </div>
        </div>
    );
};
