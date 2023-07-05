import { FC, useEffect, useState } from "react";
import "./MoviePage.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Table } from "./Table/Table";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { ButtonGroup, IconButton } from "@mui/material";
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
import { Score } from "../../components/Score/Score";
import { IMDbLogo } from "../../assets/icon/icons";
import { ActionAreaCard } from "../../components/Card/Card";

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
  const { favoriteMoviesIds, modalShareState } = useAppSelector(
    (state) => state.usefuls
  );
  const { movieId } = useParams();

  const movie = singleMovie
    ? singleMovie
    : favoriteMovie &&
      favoriteMovie.filter((movie) =>
        favoriteMoviesIds.includes(movie.imdbID)
      )[0];

  const [isBookmark, setIsBookmark] = useState(false);

  const handleBookmarkToggle = () => {
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
  };

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
          <h2>Loading...</h2>
        ) : (
          movie && movieId !== movie.imdbID && <h2>Loading...</h2>
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
                    onClick={handleBookmarkToggle}
                    sx={{
                      background: "#323537",
                      borderRadius: "0",
                      width: "50%",
                      height: "100%",
                      color: "#AFB2B6",
                    }}
                  >
                    {isBookmark ? <BookmarkIcon /> : <BookmarkBorderIcon />}
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
                    <ShareIcon />
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
