import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./TitleMovies.scss";
import { ActionAreaCard } from "../Card/Card";
import { ISearchMovie } from "../../store/movies/interfaces";
import { useState } from "react";
import { fetchMovie } from "../../store/movies/actions";

export const TitleMovies = () => {
  const { movies, loading, error } = useAppSelector((state) => state.movies);
  const { searchValue } = useAppSelector((state) => state.search);
  const [pagesCount, setPagesCount] = useState(1);
  const dispatch = useAppDispatch();

  const searchedMovieResult = (prop: keyof ISearchMovie) => {
    return (
      movies !== null &&
      !Array.isArray(movies) &&
      "Search" in movies &&
      movies[prop]
    );
  };

  const handleClick = () => {
    const nextPage = pagesCount + 1;
    dispatch(fetchMovie(`&s=${searchValue}&page=${nextPage}`));
    setPagesCount((prev) => prev + 1);
  };
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : movies !== null && !Array.isArray(movies) && "Search" in movies ? (
        movies.Search.map((item, i) => (
          <ActionAreaCard
            key={i}
            title={item.Title}
            image={
              item.Poster !== "N/A"
                ? item.Poster
                : "https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg"
            }
            genre={item.Year}
          />
        ))
      ) : (
        Array.isArray(movies) &&
        movies.map((item, i) => (
          <ActionAreaCard
            key={i}
            title={item.Title}
            image={item.Poster}
            genre={item.Genre}
          />
        ))
      )}
      {!loading && +searchedMovieResult("totalResults") > 10 && (
        <ActionAreaCard
          isClickable
          onHandleClick={handleClick}
          title={`To nex 10 movies. Page: ${pagesCount} from ${Math.ceil(
            +searchedMovieResult("totalResults") / 10
          )}`}
          genre={`Total results ${searchedMovieResult("totalResults")}`}
        />
      )}
      {!!error && error}
    </>
  );
};
