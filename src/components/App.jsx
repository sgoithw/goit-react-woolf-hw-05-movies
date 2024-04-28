import { BrowserRouter as Router } from 'react-router-dom';
import SharedLayout from 'layout/SharedLayout/SharedLayout.jsx';
import { Route, Routes } from 'react-router-dom';
import ReviewsList from './ReviewsList/ReviewsList';
import CastList from './CastList/CastList';
import { lazy } from 'react';

const Home = lazy(() => import('pages/Home/Home.jsx'));
const Movies = lazy(() => import('pages/Movies/Movies.jsx'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails.jsx'));
const NotFound = lazy(() => import('pages/NotFound/NotFound.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route element={<Home />} index />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<CastList />} />
          <Route path="reviews" element={<ReviewsList />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
