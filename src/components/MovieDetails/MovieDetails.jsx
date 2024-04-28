import { NavLink } from 'react-router-dom';
import style from './MovieDetails.module.css';

const defaultImg =
  'https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg';

const MovieDetails = ({ movie }) => {
  return (
    <>
      <div className={style.movieDetails}>
        {
          <img
            className={style.poster}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : defaultImg
            }
            width={250}
            alt={movie.title ?? movie.name}
          />
        }
        <div className={style.description}>
          <h1 className={style.descriptionTitle}>
            {movie.title ?? movie.name}
          </h1>
          <p>User score {movie.popularity}</p>
          <h2 className={style.descriptionTitle}>Overview</h2>
          <p>{movie.overview}</p>
          <h3 className={style.descriptionTitle}>Genres</h3>
          <ul className={style.genres}>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={style.additional}>
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
