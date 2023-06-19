import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchMovies } from "../../store/movies/actions";
import "./TitleMovies.scss";

interface ITitleMovies {}

export const TitleMovies: FC<ITitleMovies> = () => {
  const dispatch = useAppDispatch();
  const { movies } = useAppSelector((state) => state.movies);
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  return <div>{movies?.Title}
  <img src={movies?.Poster} alt="" /></div>;
};
