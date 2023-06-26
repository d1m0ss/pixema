import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./TitleMovies.scss";
import { ActionAreaCard } from "../Card/Card";
import { useEffect, useState } from "react";
import {
  fetchDatatRefreshAction,
  fetchDatatRequestAction,
  fetchMovie,
} from "../../store/movies/actions";
import { useNavigate } from "react-router-dom";

export const TitleMovies = () => {
  const { titleMovies, searchedMovies, loading, error } = useAppSelector(
    (state) => state.movies
  );
  const { searchValue } = useAppSelector((state) => state.usefuls);
  const [pagesCount, setPagesCount] = useState(1);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!error) {
      const nextPage = pagesCount + 1;
      dispatch(fetchMovie(`&s=${searchValue}&page=${nextPage}`));
      setPagesCount((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setPagesCount(1);
    return () => {};
  }, [searchValue]);

  return (
    <>
      {loading && !searchedMovies ? (
        <h1>Loading...</h1>
      ) : !searchValue ? (
        Array.isArray(titleMovies) &&
        titleMovies.map(
          (item, i) =>
            "Title" in item && (
              <ActionAreaCard
                key={i}
                title={item.Title}
                image={item.Poster}
                genre={item.Genre}
                typographyClick={() => navigate(`/${item.imdbID}`)}
              />
            )
        )
      ) : (
        Array.isArray(searchedMovies) &&
        searchedMovies.map(({ Search }) =>
          Search.map(({ Title, Poster, Year, imdbID }, i) => (
            <ActionAreaCard
              key={i}
              title={Title}
              image={
                Poster !== "N/A"
                  ? Poster
                  : "https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg"
              }
              genre={Year}
              typographyClick={() => navigate(`/${imdbID}`)}
            />
          ))
        )
      )}
      {loading && searchedMovies ? (
        <h1>Loading...</h1>
      ) : (
        !loading &&
        searchedMovies &&
        +searchedMovies[0].totalResults > 10 &&
        pagesCount <= +searchedMovies[0].totalResults / 10 && (
          <ActionAreaCard
            isClickable
            onHandleClick={handleClick}
            title={`To nex 10 movies. Page: ${pagesCount} from ${Math.ceil(
              +searchedMovies[0].totalResults / 10
            )}`}
            genre={`Total results ${+searchedMovies[0].totalResults}`}
          />
        )
      )}
      {!!error && error}
    </>
  );
};
