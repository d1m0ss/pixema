import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchDatatRemoveFavoriteMovieAction,
  fetchMovie,
} from "../../store/movies/actions";
import {
  removeFavoriteMoviesId,
  setFavoriteMoviesId,
  setModalShareState,
} from "../../store/useful/actions";

import { ModalShare } from "../../components/ModalShare/ModalShare";
import { ActionAreaCard } from "../../components/Card/Card";
import { Loader } from "../../components/Loader/Loader";
import { ButtonGroup, IconButton } from "@mui/material";
import { Score } from "../../components/Score/Score";
import { Table } from "./Table/Table";

import { BookmarkBorder } from "@mui/icons-material";
import { IMDbLogo } from "../../assets/icon/icons";
import { Bookmark } from "@mui/icons-material";
import { Share } from "@mui/icons-material";

import "./MoviePage.scss";

interface IMoviePage {}

export const MoviePage: FC<IMoviePage> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    singleMovie,
    favoriteMovie,
    loading,
    error,
    titleMovies,
    trendMovies,
  } = useAppSelector((state) => state.movies);
  const { movieId } = useParams();

  const { favoriteMoviesIds, modalShareState } = useAppSelector(
    (state) => state.usefuls
  );
  const [isBookmark, setIsBookmark] = useState(false);

  const { authStatus } = useAppSelector((state) => state.auth);

  const movie = singleMovie
    ? singleMovie
    : favoriteMovie &&
      favoriteMovie.filter((movie) =>
        favoriteMoviesIds.includes(movie.imdbID)
      )[0];

  const handle = {
    bookmarkToggle: () => {
      if (movie && !favoriteMoviesIds.includes(movie.imdbID)) {
        dispatch(setFavoriteMoviesId(movie.imdbID));
        setIsBookmark(true);
      } else {
        movie && dispatch(removeFavoriteMoviesId(movie.imdbID));
        setIsBookmark(false);
      }
  
      if (isBookmark && movie) {
        dispatch(fetchDatatRemoveFavoriteMovieAction(movie.imdbID));
        setIsBookmark(false);
      }
    }
  }

  useEffect(() => {
    movie &&
      movieId &&
      favoriteMoviesIds.includes(movieId) &&
      setIsBookmark(true);
  }, [favoriteMoviesIds, movie, movieId]);

  useEffect(() => {
    dispatch(fetchMovie(`&i=${movieId}`, "Single"));
  }, [movieId, dispatch]);

  const textClick = (id: string) => {
    navigate(`/${id}`);
  };

  return (
    <>
      <section className="movie">
        {loading && !movie ? (
          <Loader />
        ) : (
          movie && movieId !== movie.imdbID && <Loader />
        )}
        {error && !movie && <h2>{error}</h2>}
        {(!loading || movie) && movie && movie.imdbID === movieId && (
          <>
            <article className="movie__posre-part">
              <div className="movie__poster-wrapper">
                <img src={movie.Poster} alt="poster" />
              </div>
              <div className="movie__buttons-wrapper">
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    columnGap: "1px",
                    height: "100%",
                  }}
                >
                  <IconButton
                    aria-label="bookmark"
                    onClick={handle.bookmarkToggle}
                    disabled={!authStatus}
                    sx={{
                      "&.Mui-disabled": { backgroundColor: "#323537" },
                      background: "#323537",
                      borderRadius: "0",
                      width: "50%",
                      height: "100%",
                      color: "#AFB2B6",
                    }}
                  >
                    {isBookmark ? <Bookmark /> : <BookmarkBorder />}
                  </IconButton>
                  <IconButton
                    aria-label="share"
                    sx={{
                      background: "#323537",
                      borderRadius: "0",
                      width: "50%",
                      height: "100%",
                      color: "#AFB2B6",
                    }}
                    onClick={() => dispatch(setModalShareState())}
                  >
                    <Share />
                  </IconButton>
                </ButtonGroup>
              </div>
            </article>
            <article className="movie__info-part">
              <header className="movie__header-title">
                <span className="movie__genre">
                  {movie.Genre.split(",").join(" ● ")}
                </span>
                <h1 className="movie__title">{movie.Title}</h1>
                <div className="movie__info">
                  <Score>{`${+movie.imdbRating}`}</Score>
                  <span className="movie__imdb-score">
                    <IMDbLogo />
                    {movie.imdbRating}
                  </span>
                  <span className="movie__runtime">{movie.Runtime}</span>
                </div>
              </header>
              <section className="movie__description">{movie.Plot}</section>
              <footer className="movie__footer-details">
                <Table
                  Actors={movie.Actors}
                  BoxOffice={movie.BoxOffice}
                  Country={movie.Country}
                  Director={movie.Director}
                  Production={movie.Production}
                  Released={movie.Released}
                  Writer={movie.Writer}
                  Year={movie.Year}
                />
                {titleMovies && trendMovies && (
                  <section className="movie__rec">
                    <header className="movie__rec-header">
                      <h2 className="movie__rec-title">Recommendations</h2>
                    </header>
                    <article className="movie__rec-slider-wrp">
                      <article className="movie__rec-slider-transporter">
                        <article className="movie__rec-slider">
                          {titleMovies &&
                            trendMovies &&
                            [...titleMovies, ...trendMovies].map(
                              (
                                { Title, Poster, Genre, imdbRating, imdbID },
                                i
                              ) => (
                                <ActionAreaCard
                                  title={Title}
                                  genre={Genre}
                                  image={Poster}
                                  key={i}
                                  score={imdbRating}
                                  isClickable
                                  typographyClick={() => textClick(imdbID)}
                                  onHandleClick={() => textClick(imdbID)}
                                />
                              )
                            )}
                        </article>
                      </article>
                    </article>
                  </section>
                )}
              </footer>
            </article>
          </>
        )}
      </section>
      {modalShareState && <ModalShare />}
    </>
  );
};
