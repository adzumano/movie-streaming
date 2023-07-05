import { LoginForm } from 'features/AuthByLogin';
import React from 'react';
import MovieCoverImg from 'shared/assets/img/movie_cover.jpg';

import styles from './LoginPage.module.scss';

const LoginPage = () => {
    return (
        <div className={styles.page} style={{ backgroundImage: `url(${MovieCoverImg})` }}>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
