import { FC } from "react";
import { MoviesTemlate } from "../../components/MoviesTemlate/MoviesTemlate";
import { useAppSelector } from "../../store/hooks";
import "./FavoritesPage.scss";

export const FavoritesPage: FC = () => {
  const { favoriteMovie, loading, error } = useAppSelector(
    (state) => state.movies
  );
  return (
    <>
      {loading && !favoriteMovie && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {!loading && !favoriteMovie && !error && (
        <h2>Add some movies to favorites</h2>
      )}

      <MoviesTemlate titleMovies={favoriteMovie} />
    </>
  );
};
