import { FC } from "react";
import { MoviesTemlate } from "../../components/MoviesTemlate/MoviesTemlate";
import { useAppSelector } from "../../store/hooks";
import "./HomePage.scss";
import { Loader } from "../../components/Loader/Loader";

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
