import { useEffect, useState } from 'react';
import styles from './CastList.module.css';
import { Error, Loader } from 'components';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'api/movieDBApi';

const defaultImg =
  'https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg';

const CastList = () => {
  const { id: movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    setCast([]);

    getMovieCredits({ movieId })
      .then(data => setCast(data.data.cast))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (cast.length === 0) {
    return (
      <p className={styles.noCast}>We don't have any cast for this movie.</p>
    );
  }

  return (
    <ul>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          {
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : defaultImg
              }
              alt={name}
              width="100"
            />
          }
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default CastList;
