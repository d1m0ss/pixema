import { FC } from "react";

import { useAppSelector } from "../../store/hooks";

import { EmptyFav } from "../../assets/icon/icons";

import { MoviesTemlate } from "../../components/MoviesTemlate/MoviesTemlate";
import { Loader } from "../../components/Loader/Loader";

import "./FavoritesPage.scss";

export const FavoritesPage: FC = () => {
  const { favoriteMovie, loading, error } = useAppSelector(
    (state) => state.movies
  );
  
  return (
    <>
      {loading && !favoriteMovie && <Loader />}
      {error && !favoriteMovie && <h2>{error}</h2>}
      {!loading && !favoriteMovie && !error && (
        <section className="empty-fav">
          <EmptyFav />
          <h3>Add some movies to favorites</h3>
        </section>
      )}

      <MoviesTemlate titleMovies={favoriteMovie} />
    </>
  );
};
