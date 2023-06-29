import "./App.scss";

import { useEffect } from "react";
import { PageTemlate } from "./components/PageTemlate/PageTemlate";
import { titleMoviesMock, trendMoviesMock } from "./mock";
import { fetchMovie } from "./store/movies/actions";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { Router } from "./routes/Router";

export const App = () => {
  const dispatch = useAppDispatch();
  const { favoriteMoviesIds } = useAppSelector((state) => state.usefuls);
  const { favoriteMovie } = useAppSelector((state) => state.movies);
  useEffect(() => {
    titleMoviesMock.forEach((movieID) => {
      // dispatch(fetchMovie(`&i=${movieID}`, "Title"));
    });
    trendMoviesMock.forEach((movieID) => {
      // dispatch(fetchMovie(`&i=${movieID}`, "Trend"));
    });
  }, []);

  useEffect(() => {
    favoriteMoviesIds &&
      favoriteMoviesIds.forEach((movieID) => {
        // dispatch(fetchMovie(`&i=${movieID}`, "Favorite"));
      });
  }, [favoriteMoviesIds]);

  return (
    <div className="app">
      <PageTemlate>
        <Router />
      </PageTemlate>
    </div>
  );
};
