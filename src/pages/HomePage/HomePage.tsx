import { FC } from "react";
import { MoviesTemlate } from "../../components/MoviesTemlate/MoviesTemlate";
import { useAppSelector } from "../../store/hooks";
import "./HomePage.scss";

export const HomePage: FC = () => {
  const { titleMovies, loading } = useAppSelector((state) => state.movies);
  return (
    <>
      {loading && !titleMovies && <h2>Loading...</h2>}
      <MoviesTemlate titleMovies={titleMovies} />
    </>
  );
};
