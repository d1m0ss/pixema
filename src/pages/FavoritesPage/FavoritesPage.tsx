import { FC } from "react";
import { MoviesTemlate } from "../../components/MoviesTemlate/MoviesTemlate";
import { useAppSelector } from "../../store/hooks";
import "./FavoritesPage.scss";
import { EmptyFav } from "../../assets/icon/icons";

export const FavoritesPage: FC = () => {
  const { favoriteMovie, loading, error } = useAppSelector(
    (state) => state.movies
  );
  return (
    <>
      {loading && !favoriteMovie && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {!loading && !favoriteMovie && !error && (
        <section className="empty-fav">
          <EmptyFav/>
          <h3>Add some movies to favorites</h3>
        </section>
      )}

      <MoviesTemlate titleMovies={favoriteMovie} />
    </>
  );
};
