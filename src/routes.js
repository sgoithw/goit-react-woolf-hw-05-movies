import { Loader } from 'components';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('pages/Home/Home.jsx'));
const Movies = lazy(() => import('pages/Movies/Movies.jsx'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails.jsx'));
const NotFound = lazy(() => import('pages/NotFound/NotFound.jsx'));

const MAIN = {
  path: '/',
  title: 'Home',
  showOnNav: true,
  page: (
    <Suspense fallback={<Loader />}>
      <Home />
    </Suspense>
  ),
};

const MOVIES = {
  path: '/movies',
  title: 'Movies',
  showOnNav: true,
  page: (
    <Suspense fallback={<Loader />}>
      <Movies />
    </Suspense>
  ),
};

const MOVIE_DETAILS = {
  path: '/movies/:id',
  title: 'Movie Details',
  page: (
    <Suspense fallback={<Loader />}>
      <MovieDetails />
    </Suspense>
  ),
};

const NOT_FOUND = {
  path: '*',
  title: 'Not Found',
  page: (
    <Suspense fallback={<Loader />}>
      <NotFound />
    </Suspense>
  ),
};

export const routes = [MAIN, MOVIES, MOVIE_DETAILS, NOT_FOUND];
