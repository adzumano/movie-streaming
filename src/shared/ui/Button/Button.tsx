import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';

import styles from './Button.module.scss';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    const { children, className, ...otherProps } = props;
    return (
        <button className={classNames(styles.button, className)} {...otherProps}>
            {children}
        </button>
    );
};
