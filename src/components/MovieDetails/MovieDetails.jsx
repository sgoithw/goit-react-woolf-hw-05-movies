import { NavLink } from 'react-router-dom';
import style from './MovieDetails.module.css';

const MovieDetails = ({ movie }) => {
  return (
    <>
      <div className={style.movieDetails}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title ?? movie.name}
        />
        <h1>{movie.title ?? movie.name}</h1>

        <p>User score {movie.popularity}</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <ul>
          {movie.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to={`/movies/${movie.id}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${movie.id}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieDetails;
