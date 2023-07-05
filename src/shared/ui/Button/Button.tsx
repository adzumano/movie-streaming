import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';

import styles from './Button.module.scss';

export const Button: FC<HTMLAttributes<HTMLButtonElement>> = (props) => {
    const { children, className, ...otherProps } = props;
    return (
        <button className={classNames(styles.button, className)} {...otherProps}>
            {children}
        </button>
    );
};
