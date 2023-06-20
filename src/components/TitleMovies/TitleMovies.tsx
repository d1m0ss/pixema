import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./TitleMovies.scss";
import { titleMovies } from "../../mock";
import { ActionAreaCard } from "../Card/Card";

export const TitleMovies = () => {
  const { movies, loading } = useAppSelector((state) => state.movies);
  console.log(movies)
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
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
    </>
  );
};
