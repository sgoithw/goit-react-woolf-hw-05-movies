import { Link, useLocation } from 'react-router-dom';
import styles from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={styles.moviesList}>
      {movies.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`} state={{ from: location }}>
            {item.title ?? item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
