import { nanoid } from 'nanoid';
import { ReactComponent as BellIcon } from 'shared/assets/svg/bell.svg';
import { ReactComponent as SearchIcon } from 'shared/assets/svg/search.svg';
import { List } from 'shared/ui';

import { HeaderProfile } from '../HeaderProfile/HeaderProfile';
import styles from './HeaderActions.module.scss';

const actions = [
    { id: nanoid(), component: <SearchIcon /> },
    { id: nanoid(), component: <BellIcon /> },
    { id: nanoid(), component: <HeaderProfile /> },
];
export const HeaderActions = () => {
    return (
        <List
            className={styles.list}
            items={actions}
            renderItem={({ id, component }) => <li key={id}>{component}</li>}
        />
    );
};
