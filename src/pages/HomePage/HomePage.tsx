import { FC } from "react";

import { useAppSelector } from "../../store/hooks";

import { MoviesTemlate } from "../../components/MoviesTemlate/MoviesTemlate";
import { Loader } from "../../components/Loader/Loader";

import "./HomePage.scss";

export const HomePage: FC = () => {
  const { titleMovies, loading, error } = useAppSelector(
    (state) => state.movies
  );

  return (
    <>
      {loading && !titleMovies && <Loader />}
      {error && <h2>{error}</h2>}
      {!titleMovies && !error && !loading && <h2>Out of home movies</h2>}
      <MoviesTemlate titleMovies={titleMovies} />
    </>
  );
};
