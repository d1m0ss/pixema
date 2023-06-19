import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./actionTypes";

export interface IMovie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: IRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface IRating {
  Source: string;
  Value: string;
}

export interface IMoviesState {
  loading: boolean;
  movies: IMovie | null;
  error: string | null;
}

export interface IFetchDataRequestAction {
  type: typeof FETCH_DATA_REQUEST;
}

export interface IFetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: {
    data: IMovie;
  };
}

export interface IFetchDataErrorAction {
  type: typeof FETCH_DATA_ERROR;
  payload: {
    error: string;
  };
}

export type ActionTypes =
  | IFetchDataRequestAction
  | IFetchDataSuccessAction
  | IFetchDataErrorAction;
