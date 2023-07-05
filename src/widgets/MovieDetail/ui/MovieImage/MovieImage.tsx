import { FC } from 'react';

import styles from './MovieImage.module.scss';

interface IMovieImageProps {
    url: string;
    name: string;
}
export const MovieImage: FC<IMovieImageProps> = (props) => {
    const { url, name } = props;
    return <img className={styles.img} src={url} alt={name} />;
};
