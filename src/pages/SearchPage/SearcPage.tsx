import { FC } from "react";
import { MoviesTemlate } from "../../components/MoviesTemlate/MoviesTemlate";
import { useAppSelector } from "../../store/hooks";
import "./SearchPage.scss";

export const SearchPage: FC = () => {
  const { searchedMovies, loading } = useAppSelector((state) => state.movies);

  return (
    <>
      {loading && !searchedMovies && <h2>Loading...</h2>}
      {!loading && !searchedMovies && <h2>Search field is empty...</h2>}
      <MoviesTemlate searchedMovies={searchedMovies} />
    </>
  );
};
