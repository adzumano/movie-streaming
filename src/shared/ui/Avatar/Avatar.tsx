import classNames from 'classnames';
import { FC } from 'react';

import styles from './Avatar.module.scss';

interface IAvatarProps {
    className?: string;
    src: string;
    alt: string;
    size?: number;
}
export const Avatar: FC<IAvatarProps> = (props) => {
    const { src, size = 32, alt, className } = props;
    return (
        <img
            className={classNames(styles.avatar, className)}
            src={src}
            alt={alt}
            style={{ width: size, height: size }}
        />
    );
};
