import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, Heading, Input, Logo } from 'shared/ui';

import styles from './LoginForm.module.scss';

type Inputs = {
    username: string;
    password: string;
};
export const LoginForm = () => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Logo className={styles.logo} />
            <Heading className={styles.title} level={'p'}>
                Enjoy the newest movies
            </Heading>
            <Input className={styles.input} {...register('username')} placeholder={'username'} />
            <Input className={styles.input} {...register('password')} placeholder={'password'} />
            <Button className={styles.btn} type={'submit'}>
                Log in
            </Button>
            <Heading className={styles.helpText} level={'p'}>
                No account?{' '}
                <Link className={styles.link} to={'/sign-up'}>
                    Sign up
                </Link>
            </Heading>
        </form>
    );
};
