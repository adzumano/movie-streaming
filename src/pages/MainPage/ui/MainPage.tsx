import { MovieDetail } from 'widgets/MovieDetail';
import { MovieList } from 'widgets/MovieList';

const MainPage = () => {
    return (
        <>
            <MovieList title={'Trending at this moment'} />
            <MovieDetail />
        </>
    );
};

export default MainPage;
