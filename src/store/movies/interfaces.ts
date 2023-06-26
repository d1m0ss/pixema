import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REFRESH,
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

export interface ISearch {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface ISearchMovie {
  Response: string;
  Search: ISearch[];
  totalResults: string;
}

export interface IRating {
  Source: string;
  Value: string;
}

export interface IMoviesState {
  loading: boolean;
  titleMovies: IMovie[] | null;
  searchedMovies: ISearchMovie[] | null;
  singleMovie: IMovie | null;
  error: string | null;
}

export interface IFetchDataRequestAction {
  type: typeof FETCH_DATA_REQUEST;
}

export interface IFetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: {
    data: IMovie | ISearchMovie;
    isSingle: boolean;
  };
}

export interface IFetchDataRefreshAction {
  type: typeof FETCH_DATA_REFRESH;
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
  | IFetchDataRefreshAction
  | IFetchDataErrorAction;
