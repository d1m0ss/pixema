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
import { IMoviesState, ActionTypes } from "./interfaces";

const initialState: IMoviesState = {
  loading: false,
  searchedMovies: null,
  favoriteMovie: null,
  singleMovie: null,
  titleMovies: null,
  trendMovies: null,
  error: null,
};

export const moviesReducer = (
  state = initialState,
  action: ActionTypes
): IMoviesState => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case FETCH_DATA_SUCCESS_SEARCH:
      return {
        ...state,
        loading: false,
        searchedMovies: Array.isArray(state.searchedMovies)
          ? [...state.searchedMovies, action.payload.data]
          : [action.payload.data],
      };
    case FETCH_DATA_SUCCESS_SINGLE:
      return {
        ...state,
        loading: false,
        singleMovie: action.payload.data,
      };
    case FETCH_DATA_SUCCESS_TITLE:
      return {
        ...state,
        loading: false,
        titleMovies: Array.isArray(state.titleMovies)
          ? [...state.titleMovies, action.payload.data]
          : [action.payload.data],
      };
    case FETCH_DATA_SUCCESS_TREND:
      return {
        ...state,
        loading: false,
        trendMovies: Array.isArray(state.trendMovies)
          ? [...state.trendMovies, action.payload.data]
          : [action.payload.data],
      };
    case FETCH_DATA_SUCCESS_FAVORITE:
      return {
        ...state,
        loading: false,
        favoriteMovie: Array.isArray(state.favoriteMovie)
          ? state.favoriteMovie.find(
              (item) => item.imdbID === action.payload.data.imdbID
            )
            ? state.favoriteMovie
            : [...state.favoriteMovie, action.payload.data]
          : [action.payload.data],
      };
    case FETCH_DATA_REFRESH:
      return {
        ...state,
        loading: false,
        singleMovie: null,
      };
    case FETCH_DATA_ERROR:
      return { ...state, error: action.payload.error, loading: false };
    case FETCH_DATA_REMOVE_FAVORITE_MOVIE:
      return {
        ...state,
        favoriteMovie:
          state.favoriteMovie &&
          state.favoriteMovie.filter(
            (movie) => movie.imdbID !== action.payload.id
          ).length === 0
            ? null
            : state.favoriteMovie &&
              state.favoriteMovie.filter(
                (movie) => movie.imdbID !== action.payload.id
              ),
      };
    default:
      return state;
  }
};
