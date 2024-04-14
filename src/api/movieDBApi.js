import axios from 'axios';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWY2YTAyMGQxMzI5N2E0MmUzM2M2MzYwZmYzZDhiYyIsInN1YiI6IjY2MWM0OWU1MGU1YWJhMDE2M2Y0M2EyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D4L0aPXHVenswxemsaTXzPkNoBfxccnmtR42zvQfmjQ';
const BASE_URL = 'https://api.themoviedb.org';

const movieAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

/**
 * Returns a list of tranding movies
 * @returns {Promise<AxiosResponse<any>>}
 */
function getTrendingMovies() {
  return movieAPI.get('/3/trending/all/day');
}

export { getTrendingMovies };

/**
 * Search movies
 *
 * @returns {Promise<AxiosResponse<any>>}
 */
function searchMovies({
  query,
  includeAdult = false,
  language = 'en-US',
  page = 1,
  primaryReleaseYear = null,
  region = null,
  year = null,
}) {
  //filter empty values
  const params = {
    query,
    include_adult: includeAdult,
    language,
    page,
  };

  if (primaryReleaseYear) {
    params.primary_release_year = primaryReleaseYear;
  }
  if (region) {
    params.region = region;
  }
  if (year) {
    params.year = year;
  }

  return movieAPI.get('/3/search/movie', { params });
}

export { searchMovies };

/**
 * Get movie details
 * @param {Object} options
 * @param {number} options.movieId
 * @param {string} [options.append_to_response='videos']
 * @param {string} [options.language='en-US']
 * @returns {Promise<AxiosResponse<any>>}
 * */
function getMovieDetails({
  movieId,
  append_to_response = 'videos',
  language = 'en-US',
}) {
  return movieAPI.get(`/3/movie/${movieId}`, {
    params: { append_to_response, language },
  });
}

export { getMovieDetails };

/**
 * Get movie credits
 * @param {Object} options
 * @param {number} options.movieId
 * @param {string} [options.language='en-US']
 * @returns {Promise<AxiosResponse<any>>}
 * */
function getMovieCredits({ movieId, language = 'en-US' }) {
  return movieAPI.get(`/3/movie/${movieId}/credits`, { params: { language } });
}

export { getMovieCredits };

/**
 * Get movie reviews
 * @param {Object} options
 * @param {number} options.movieId
 * @param {string} [options.language='en-US']
 * @returns {Promise<AxiosResponse<any>>}
 * */
function getMovieReviews({ movieId, page = 1, language = 'en-US' }) {
  return movieAPI.get(`/3/movie/${movieId}/reviews`, {
    params: { language, page },
  });
}

export { getMovieReviews };
