import { FC } from "react";
import { MoviesTemlate } from "../../components/MoviesTemlate/MoviesTemlate";
import { useAppSelector } from "../../store/hooks";

export const TrendsPage: FC = () => {
  const { trendMovies, loading, error } = useAppSelector(
    (state) => state.movies
  );

  return (
    <>
      {loading && !trendMovies && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {!trendMovies && !loading && <h2>Out of trends movies</h2>}

      <MoviesTemlate titleMovies={trendMovies} />
    </>
  );
};
