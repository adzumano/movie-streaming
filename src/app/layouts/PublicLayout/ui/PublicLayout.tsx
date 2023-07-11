import { Outlet } from 'react-router-dom';
import MovieCoverImg from 'shared/assets/img/auth_cover.jpeg';

import styles from './PublicLayout.module.scss';

export const PublicLayout = () => {
    return (
        <div className={styles.public} style={{ backgroundImage: `url(${MovieCoverImg})` }}>
            <Outlet />
        </div>
    );
};
