import { FC } from "react";
import { MoviesTemlate } from "../../components/MoviesTemlate/MoviesTemlate";
import { useAppSelector } from "../../store/hooks";
import "./HomePage.scss";
import { Outlet } from "react-router-dom";

export const HomePage: FC = () => {
  const { titleMovies, loading, error } = useAppSelector((state) => state.movies);
  console.log(<Outlet />);
  return (
    <>
      {loading && !titleMovies && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {!titleMovies && <h2>Out of home movies</h2>}
      <MoviesTemlate titleMovies={titleMovies} />
    </>
  );
};
