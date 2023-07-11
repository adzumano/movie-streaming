import classNames from 'classnames';
import { FC, InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
    const { className, ...otherProps } = props;
    return <input className={classNames(styles.input, className)} {...otherProps}></input>;
};
