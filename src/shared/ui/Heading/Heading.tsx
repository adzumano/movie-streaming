import classNames from 'classnames';
import { FC, HTMLAttributes, createElement } from 'react';

import styles from './Heading.module.scss';

interface IHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}
export const Heading: FC<IHeadingProps> = (props) => {
    const { children, className, level } = props;

    const Component = ({ ...props }: HTMLAttributes<HTMLHeadingElement>) =>
        createElement(level, props, children);
    return <Component className={classNames(styles.heading, className, styles[level])}>{children}</Component>;
};
