import { nanoid } from 'nanoid';
import { List } from 'shared/ui';

import { HeaderNavigationItem } from '../HeaderNavigationItem/HeaderNavigationItem';
import styles from './HeaderNavigation.module.scss';

const links = [
    { id: nanoid(), text: 'Movies' },
    { id: nanoid(), text: 'Series' },
    { id: nanoid(), text: 'Documentaries' },
];
export const HeaderNavigation = () => {
    return (
        <nav>
            <List
                className={styles.menu}
                items={links}
                renderItem={({ id, text }) => <HeaderNavigationItem key={id} text={text} />}
            />
        </nav>
    );
};
