import { MovieList } from 'widgets/MovieList';

const MainPage = (): JSX.Element => {
    return (
        <div>
            <MovieList title={'Trending at this moment'} />
        </div>
    );
};

export default MainPage;
