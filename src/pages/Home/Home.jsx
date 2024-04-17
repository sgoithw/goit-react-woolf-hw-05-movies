import { Error, Loader, MoviesList } from 'components';
import styles from './Home.module.css';
import { getTrendingMovies } from 'api/movieDBApi.js';
import { useEffect, useState } from 'react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getTrendingMovies()
      .then(data => setMovies(data.data.results))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={styles.home}>
      <h1>Trending Today</h1>
      {isLoading && <Loader />}
      {error && <Error error={error} />}

      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
