import { FC } from "react";
import { MoviesTemlate } from "../../components/MoviesTemlate/MoviesTemlate";
import { useAppSelector } from "../../store/hooks";
import "./SearchPage.scss";
import { Loader } from "../../components/Loader/Loader";

export const SearchPage: FC = () => {
  const { searchedMovies, loading, error } = useAppSelector(
    (state) => state.movies
  );
  const { searchValue } = useAppSelector((state) => state.usefuls);

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
