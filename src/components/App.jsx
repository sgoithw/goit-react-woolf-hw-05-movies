import { BrowserRouter as Router } from 'react-router-dom';
import SharedLayout from 'layout/SharedLayout/SharedLayout.jsx';
import { Route, Routes } from 'react-router-dom';
import ReviewsList from './ReviewsList/ReviewsList';
import CastList from './CastList/CastList';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

const Home = lazy(() => import('pages/Home/Home.jsx'));
const Movies = lazy(() => import('pages/Movies/Movies.jsx'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails.jsx'));
const NotFound = lazy(() => import('pages/NotFound/NotFound.jsx'));

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            key="home"
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
            index
          />
          <Route
            key="movies"
            path="/movies"
            element={
              <Suspense fallback={<Loader />}>
                <Movies />
              </Suspense>
            }
          />
          <Route
            key="movieDetails"
            path="/movies/:id"
            element={
              <Suspense fallback={<Loader />}>
                <MovieDetails />
              </Suspense>
            }
          >
            <Route
              key="cast"
              path="cast"
              element={
                <Suspense fallback={<Loader />}>
                  <CastList />
                </Suspense>
              }
            />
            <Route
              key="reviews"
              path="reviews"
              element={
                <Suspense fallback={<Loader />}>
                  <ReviewsList />
                </Suspense>
              }
            />
          </Route>
          <Route
            key="notFound"
            path="*"
            element={
              <Suspense fallback={<Loader />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};
