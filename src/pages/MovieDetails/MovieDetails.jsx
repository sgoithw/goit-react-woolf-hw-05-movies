import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'api/movieDBApi';
import { useEffect, useState } from 'react';
import { Error, Loader, MovieDetails as MD } from 'components';

const MovieDetails = () => {
  const location = useLocation();
  const { id: movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const backUrl = location.state?.from ?? '/';

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    setMovie(null);

    getMovieDetails({ movieId })
      .then(data => setMovie(data.data))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {backUrl && (
        <Link to={backUrl}>
          <button>Go back</button>
        </Link>
      )}
      {isLoading && <Loader />}
      {error && <Error error={error} />}
      {movie && <MD movie={movie} />}
      <Outlet />
    </>
  );
};

export default MovieDetails;
