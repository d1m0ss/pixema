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
import { getUserInfo } from "./api/getUSerInfo";
import { setUserInfo } from "./store/user/actions";
import { setLoggedAction } from "./store/auth/actions";
import { tokenVerify } from "./api/auth/tokenVerify";
import { setDarkTheme, setLightTheme } from "./store/theme/actions";
import { CircularProgress } from "@mui/material";

export const App = () => {
  const dispatch = useAppDispatch();
  const { favoriteMoviesIds } = useAppSelector((state) => state.usefuls);
  const { favoriteMovie } = useAppSelector((state) => state.movies);
  const { authStatus } = useAppSelector((state) => state.auth);
  const { theme } = useAppSelector((state) => state.theme);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    token &&
      tokenVerify({ token })
        .then(() => {
          dispatch(setLoggedAction());
        })
        .catch(() => {});
  }, [dispatch]);

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", theme);
    }
    localStorage.getItem("theme") === "dark"
      ? dispatch(setDarkTheme())
      : dispatch(setLightTheme());
  }, []);

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      getUserInfo()
        .then((data) => {
          dispatch(setUserInfo(data));
          dispatch(setLoggedAction());
        })
        .catch(() => {
          console.log("err");
        });
    }
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
