import { LoginForm } from 'features/AuthByLogin';
import React from 'react';

import styles from './LoginPage.module.scss';

const LoginPage = () => {
    return (
        <div className={styles.page}>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
