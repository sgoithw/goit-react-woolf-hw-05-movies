import { useParams } from 'react-router-dom';
import style from './ReviewsList.module.css';
import { getMovieReviews } from 'api/movieDBApi';
import { useEffect, useState } from 'react';
import { Error, Loader } from 'components';

const ReviewsList = () => {
  const { id: movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    setReviews([]);

    getMovieReviews({ movieId })
      .then(data => setReviews(data.data.results))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (reviews.length === 0) {
    return (
      <p className={style.noReviews}>
        We don't have any reviews for this movie.
      </p>
    );
  }

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsList;
