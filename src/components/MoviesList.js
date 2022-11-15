import Movie from './Movie';

const MoviesList = ({movies}) => (
    <div className='MovieList'>
    {movies.map((movie) => <Movie className="Movie-Item" key={movie.imdbID} title={movie.Title} poster={movie.Poster} year={movie.Year} />)}
    </div>
)

export default MoviesList;
