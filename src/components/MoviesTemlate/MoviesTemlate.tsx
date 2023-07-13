import { FC } from "react";
import { useNavigate } from "react-router-dom";

import {
  fetchMovie,
  fetchDatatRequestAction,
} from "../../store/movies/actions";
import { increasPagesCount } from "../../store/useful/actions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { IMovie, ISearchMovie } from "../../store/movies/interfaces";

import { ActionAreaCard } from "../Card/Card";

import "./MoviesTemlate.scss";

interface IMoviesTemlate {
  titleMovies?: IMovie[] | null;
  searchedMovies?: ISearchMovie[] | null;
}

export const MoviesTemlate: FC<IMoviesTemlate> = ({
  searchedMovies,
  titleMovies,
}) => {
  const { searchValue, pagesCount } = useAppSelector((state) => state.usefuls);
  const { loading, error } = useAppSelector((state) => state.movies);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handle = {
    click: () => {
      dispatch(fetchDatatRequestAction());
      if (!error) {
        const nextPage = pagesCount + 1;
        dispatch(fetchMovie(`&s=${searchValue}&page=${nextPage}`, "Search"));
        dispatch(increasPagesCount());
      }
    },
    textClick: (id: string) => {
      navigate(`${id}`);
    },
  };

  return (
    <article className="movies">
      {titleMovies &&
        Array.isArray(titleMovies) &&
        titleMovies.map(
          (item, i) =>
            "Title" in item && (
              <ActionAreaCard
                isClickable
                onHandleClick={() => handle.textClick(item.imdbID)}
                key={i}
                title={item.Title}
                image={item.Poster}
                genre={item.Genre}
                score={
                  item.imdbRating !== "N/A"
                    ? item.imdbRating
                    : item.Metascore !== "N/A"
                    ? `${+item.Metascore / 10}`
                    : "N/A"
                }
                typographyClick={() => handle.textClick(item.imdbID)}
              />
            )
        )}

      {searchedMovies &&
        Array.isArray(searchedMovies) &&
        searchedMovies.map(({ Search }) =>
          Search.map(({ Title, Poster, Year, imdbID }, i) => (
            <ActionAreaCard
              isClickable
              onHandleClick={() => handle.textClick(imdbID)}
              key={i}
              title={Title}
              image={
                Poster !== "N/A"
                  ? Poster
                  : "https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg"
              }
              genre={Year}
              typographyClick={() => handle.textClick(imdbID)}
            />
          ))
        )}

      {loading && searchedMovies ? (
        <ActionAreaCard
          image="https://avatars.mds.yandex.net/i?id=e86de76d33e7d7ac4af69f79985ce648_l-3979482-images-thumbs&n=13"
          title={`Loading...`}
          genre={`Please Wait`}
        />
      ) : (
        !loading &&
        searchedMovies &&
        +searchedMovies[0].totalResults > 10 &&
        pagesCount <= +searchedMovies[0].totalResults / 10 && (
          <ActionAreaCard
            isClickable
            onHandleClick={handle.click}
            image="https://t4.ftcdn.net/jpg/04/31/62/85/360_F_431628534_Q6y86rAXcFiv7Ol5Tsul25aa8Nnt6gsN.jpg"
            title={`To nex 10 movies. Page: ${pagesCount} from ${Math.ceil(
              +searchedMovies[0].totalResults / 10
            )}`}
            genre={`Total results ${+searchedMovies[0].totalResults}`}
          />
        )
      )}
      
    </article>
  );
};
