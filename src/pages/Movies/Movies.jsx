import style from './Movies.module.css';

import { Error, Loader, MovieSearchForm, MoviesList } from 'components';
import { searchMovies } from 'api/movieDBApi';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    setError(null);
    setIsLoading(true);
    setMovies([]);
    searchMovies({ query })
      .then(data => setMovies(data.data.results))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [query]);

  const handleSearch = query => {
    setSearchParams({ query });
  };

  return (
    <div className={style.moviesSearch}>
      <h1>Movie Search</h1>

      <MovieSearchForm onSearch={handleSearch} />
      {isLoading && <Loader />}
      {!isLoading && <MoviesList movies={movies} />}
      {error && <Error error={error} />}
    </div>
  );
};

export default Movies;
