import { Heading } from 'shared/ui';

import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    return (
        <section className={styles.page}>
            <Heading level={'h1'} className={styles.title}>
                404
            </Heading>
            <Heading level={'p'} className={styles.text}>
                Ooops, page not found
            </Heading>
        </section>
    );
};

export default NotFoundPage;
