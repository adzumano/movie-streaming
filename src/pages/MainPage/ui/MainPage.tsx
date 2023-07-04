import { IMovie, MovieCard } from 'entities/Movie';
import { nanoid } from 'nanoid';
import Movie1 from 'shared/assets/img/movie_1.png';
import Movie2 from 'shared/assets/img/movie_2.png';
import { List } from 'shared/ui';

const movies: IMovie[] = [
    {
        id: nanoid(),
        name: 'Bullet science',
        url: Movie1,
        date: new Date(),
        genre: 'Action comedy',
    },
    {
        id: nanoid(),
        name: 'House of Gucci',
        url: Movie2,
        date: new Date(),
        genre: 'Drama',
    },
];
const MainPage = (): JSX.Element => {
    return (
        <div>
            <List
                items={movies}
                renderItem={(movie) => (
                    <li key={movie.id}>
                        <MovieCard url={movie.url} name={movie.name} date={movie.date} genre={movie.genre} />
                    </li>
                )}
            />
        </div>
    );
};

export default MainPage;
