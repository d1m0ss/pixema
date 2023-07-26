import { FC } from "react";

import { MoviesTemlate } from "../../components/MoviesTemlate/MoviesTemlate";
import { Loader } from "../../components/Loader/Loader";
import { useAppSelector } from "../../store/hooks";

import "./SearchPage.scss";

export const SearchPage: FC = () => {
  const { searchValue } = useAppSelector((state) => state.usefuls);
  const { searchedMovies, loading, error } = useAppSelector(
    (state) => state.movies
  );

  return (
    <>
      {loading && !searchedMovies && <Loader />}
      {error && <h2>{error}</h2>}
      {!error && !loading && !searchedMovies && !searchValue && (
        <h2>Search field is empty...</h2>
      )}

      <MoviesTemlate searchedMovies={searchedMovies} />
    </>
  );
};
