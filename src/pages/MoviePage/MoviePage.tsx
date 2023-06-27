import { FC, useEffect } from "react";
import "./MoviePage.scss";
import { Outlet, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchDatatRefreshAction,
  fetchMovie,
} from "../../store/movies/actions";
import { Table } from "./Table/Table";

interface IMoviePage {}

export const MoviePage: FC<IMoviePage> = () => {
  const dispatch = useAppDispatch();
  const { singleMovie, loading, error } = useAppSelector(
    (state) => state.movies
  );
  const { movieId } = useParams();

  useEffect(() => {
    dispatch(fetchMovie(`&i=${movieId}`, "Single"));
  }, []);
  const movie = singleMovie && singleMovie;

  return (
    <section className="movie">
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {!loading && movie && (
        <>
          <article className="movie__posre-part">
            <div className="movie__poster-wrapper">
              <img src={movie.Poster} alt="poster" />
            </div>
            <div>Buttons: flag & share</div>
          </article>
          <article className="movie__info-part">
            <header className="movie__header-title">
              <span className="movie__genre">
                {movie.Genre.split(",").join(" ● ")}
              </span>
              <h1 className="movie__title">{movie.Title}</h1>
              <div className="movie__info">
                <span className="movie__score">{+movie.Metascore / 10}</span>
                <span className="movie__imdb-score">{movie.imdbRating}</span>
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
            </footer>
          </article>
        </>
      )}
    </section>
  );
};
