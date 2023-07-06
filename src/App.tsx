import "./App.scss";

import { useEffect } from "react";
import { titleMoviesMock, trendMoviesMock } from "./mock";
import {
  fetchDatatSuccessFavoriteAction,
  fetchMovie,
} from "./store/movies/actions";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { Router } from "./routes/Router";
import { IMovie } from "./store/movies/interfaces";
import {} from "./store/movies/actions";
import { setFavoriteMoviesId } from "./store/useful/actions";
import { getUserInfo } from "./api/getUserInfo";
import {
  setUserEmailAction,
  setUserIdAction,
  setUserInfo,
  setUsernameAction,
} from "./store/user/actions";
import { setLoggedAction } from "./store/auth/actions";

export const App = () => {
  const dispatch = useAppDispatch();
  const { favoriteMoviesIds } = useAppSelector((state) => state.usefuls);
  const { favoriteMovie } = useAppSelector((state) => state.movies);
  const { authStatus } = useAppSelector((state) => state.auth);

  useEffect(() => {
    getUserInfo()
      .then((data) => {
        console.log(data);
        dispatch(setUserInfo(data));
        dispatch(setLoggedAction());
      })
      .catch(() => {
        console.log("error");
      });
  }, [authStatus]);

  useEffect(() => {
    titleMoviesMock.forEach((movieID) => {
      dispatch(fetchMovie(`&i=${movieID}`, "Title"));
    });
    trendMoviesMock.forEach((movieID) => {
      dispatch(fetchMovie(`&i=${movieID}`, "Trend"));
    });
  }, []);

  useEffect(() => {
    const favMoive = localStorage.getItem("favMove");
    favMoive &&
      JSON.parse(favMoive).map((item: IMovie) => {
        dispatch(setFavoriteMoviesId(item.imdbID));
        dispatch(fetchDatatSuccessFavoriteAction(item));
      });
  }, []);

  useEffect(() => {
    favoriteMovie &&
      localStorage.setItem("favMove", JSON.stringify(favoriteMovie));
    !favoriteMovie && localStorage.removeItem("favMove");
  }, [favoriteMovie]);

  useEffect(() => {
    favoriteMoviesIds &&
      favoriteMoviesIds.forEach((movieID) => {
        dispatch(fetchMovie(`&i=${movieID}`, "Favorite"));
      });
  }, [favoriteMoviesIds]);

  return (
    <div className="app">
      <Router />
    </div>
  );
};
