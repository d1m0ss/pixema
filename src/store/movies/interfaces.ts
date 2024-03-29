import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REFRESH,
  FETCH_DATA_REMOVE_FAVORITE_MOVIE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_SUCCESS_FAVORITE,
  FETCH_DATA_SUCCESS_SEARCH,
  FETCH_DATA_SUCCESS_SINGLE,
  FETCH_DATA_SUCCESS_TITLE,
  FETCH_DATA_SUCCESS_TREND,
} from "./actionTypes";

export type MovieType =
  | "Title"
  | "Trend"
  | "Search"
  | "Single"
  | "Favorite"
  | null;

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
  searchedMovies: ISearchMovie[] | null;
  favoriteMovie: IMovie[] | null;
  titleMovies: IMovie[] | null;
  trendMovies: IMovie[] | null;
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
  };
}

export interface IFetchDataSuccessTitleAction {
  type: typeof FETCH_DATA_SUCCESS_TITLE;
  payload: {
    data: IMovie;
  };
}

export interface IFetchDataSuccessSingleAction {
  type: typeof FETCH_DATA_SUCCESS_SINGLE;
  payload: {
    data: IMovie;
  };
}

export interface IFetchDataSuccessTrendAction {
  type: typeof FETCH_DATA_SUCCESS_TREND;
  payload: {
    data: IMovie;
  };
}

export interface IFetchDataSuccessFavoriteAction {
  type: typeof FETCH_DATA_SUCCESS_FAVORITE;
  payload: {
    data: IMovie;
  };
}

export interface IFetchDataSuccessSearchAction {
  type: typeof FETCH_DATA_SUCCESS_SEARCH;
  payload: {
    data: ISearchMovie;
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

export interface IFetchDataRemoveFavoriteMovieAction {
  type: typeof FETCH_DATA_REMOVE_FAVORITE_MOVIE;
  payload: {
    id: string;
  };
}

export type ActionTypes =
  | IFetchDataRequestAction
  | IFetchDataSuccessAction
  | IFetchDataRefreshAction
  | IFetchDataErrorAction
  | IFetchDataSuccessTitleAction
  | IFetchDataSuccessSingleAction
  | IFetchDataSuccessTrendAction
  | IFetchDataSuccessFavoriteAction
  | IFetchDataSuccessSearchAction
  | IFetchDataRemoveFavoriteMovieAction;
