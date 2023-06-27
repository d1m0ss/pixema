import { FC } from "react";
import { MoviesTemlate } from "../../components/MoviesTemlate/MoviesTemlate";
import { useAppSelector } from "../../store/hooks";

export const TrendsPage: FC = () => {
    const { trendMovies, loading } = useAppSelector((state) => state.movies);

    return (
      <>
        {loading && !trendMovies && <h2>Loading...</h2>}
        <MoviesTemlate titleMovies={trendMovies} />
      </>
    );
};
