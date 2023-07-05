import React, { FC } from 'react';
import { ReactComponent as Heart } from 'shared/assets/svg/heart.svg';

import styles from './AddToFavorite.module.scss';

interface IAddToFavoriteProps {
    isFavorite?: boolean;
}
export const AddToFavorite: FC<IAddToFavoriteProps> = (props) => {
    const { isFavorite = false } = props;
    return (
        <div className={styles.block}>
            <Heart fill={isFavorite ? '#6100C2' : 'none'} />
        </div>
    );
};
