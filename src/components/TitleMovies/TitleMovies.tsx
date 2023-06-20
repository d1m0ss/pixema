import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchMovies } from "../../store/movies/actions";
import "./TitleMovies.scss";
import { titleMovies } from "../../mock";
import { ActionAreaCard } from "../Card/Card";

export const TitleMovies = () => {
  const { movies } = useAppSelector((state) => state.movies);

  return (
    <>
      {movies.map((item, i) => (
        <ActionAreaCard
          key={i}
          title={item.Title}
          image={item.Poster}
          genre={item.Genre}
          />
      ))}
    </>
  );
};
