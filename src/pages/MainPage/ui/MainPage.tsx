import AvatarImg from 'shared/assets/img/avatar.png';
import { Avatar, Button } from 'shared/ui';
import { MovieDetail } from 'widgets/MovieDetail';
import { MovieList } from 'widgets/MovieList';
import { Sidebar } from 'widgets/Sidebar';

const MainPage = (): JSX.Element => {
    return (
        <div>
            <Sidebar />
            <MovieList title={'Trending at this moment'} />
            <MovieDetail />
            <Button>Watch</Button>
            <Avatar src={AvatarImg} alt={'avatar'} size={90} />
        </div>
    );
};

export default MainPage;
