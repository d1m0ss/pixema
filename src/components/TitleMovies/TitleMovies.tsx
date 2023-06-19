import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchMovies } from "../../store/movies/actions";
import "./TitleMovies.scss";
import { titleMovies } from "../../mock";
import { ActionAreaCard } from "../Card/Card";

export const TitleMovies = () => {
  const dispatch = useAppDispatch();
  const { movies } = useAppSelector((state) => state.movies);
  interface IMovik {
    title: string;
    image: string;
    genre: string;
  }
  const [movie, setMovie] = useState<IMovik[] | null>(null);
  useEffect(() => {
    setMovie(
      titleMovies.map((item) => {
        // dispatch(fetchMovies(`&i=${}`));
        return {
          title: movies?.Title,
          image: movies?.Poster,
          genre: movies?.Genre,
        }
      })
    );
  }, []);

  return;
};
