import "./App.scss";

import { useEffect } from "react";
import { PageTemlate } from "./components/PageTemlate/PageTemlate";
import { titleMoviesMock, trendMoviesMock } from "./mock";
import { fetchMovie } from "./store/movies/actions";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { Router } from "./routes/Router";

export const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    titleMoviesMock.forEach((movieID) => {
      dispatch(fetchMovie(`&i=${movieID}`, "Title"));
    });
    trendMoviesMock.forEach((movieID) => {
      dispatch(fetchMovie(`&i=${movieID}`, "Trend"));
    });
  }, []);

  return (
    <div className="app">
      <PageTemlate>
        <Router />
      </PageTemlate>
    </div>
  );
};
