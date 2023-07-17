import { FC } from 'react';
import { Heading } from 'shared/ui';

import styles from './HeaderNavigationItem.module.scss';

interface IHeaderNavigationItemProps {
    text: string;
}
export const HeaderNavigationItem: FC<IHeaderNavigationItemProps> = (props) => {
    const { text } = props;
    return (
        <li>
            <Heading className={styles.text} level={'p'}>
                {text}
            </Heading>
        </li>
    );
};
