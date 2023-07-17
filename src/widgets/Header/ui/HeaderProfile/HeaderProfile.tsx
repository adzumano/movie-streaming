import AvatarImg from 'shared/assets/img/avatar.png';
import { Avatar, Heading } from 'shared/ui';

import styles from './HeaderProfile.module.scss';

export const HeaderProfile = () => {
    return (
        <div className={styles.profile}>
            <Avatar src={AvatarImg} />
            <Heading className={styles.text} level={'p'}>
                Tetiana
            </Heading>
        </div>
    );
};
