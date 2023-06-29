import { FC } from "react";
import { MoviesTemlate } from "../../components/MoviesTemlate/MoviesTemlate";
import { useAppSelector } from "../../store/hooks";
import "./HomePage.scss";

export const HomePage: FC = () => {
  const { titleMovies, loading, error } = useAppSelector(
    (state) => state.movies
  );
  return (
    <>
      {loading && !titleMovies && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {!titleMovies && <h2>Out of movies</h2>}
      <MoviesTemlate titleMovies={titleMovies} />
    </>
  );
};
