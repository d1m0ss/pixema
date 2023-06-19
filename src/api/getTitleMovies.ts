import axios from "axios";
import { urls } from "./urls";
import { IMovie } from "../store/movies/interfaces";

export const getTitleMovies = (movies: string[]) => {
  
  movies.map(async (movie) => {
    (await axios.get(`${urls.GET_URL}&i=${movie}`)).data;
  });
  
};
