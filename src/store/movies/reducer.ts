import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REFRESH,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./actionTypes";
import { IMoviesState, ActionTypes } from "./interfaces";

const initialState: IMoviesState = {
  loading: false,
  searchedMovies: null,
  titleMovies: null,
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
        titleMovies:
          Array.isArray(state.titleMovies) && "Title" in action.payload.data
            ? [...state.titleMovies, action.payload.data]
            : "Title" in action.payload.data
            ? [action.payload.data]
            : state.titleMovies,
        searchedMovies:
          Array.isArray(state.searchedMovies) && "Search" in action.payload.data
            ? [...state.searchedMovies, action.payload.data]
            : "Search" in action.payload.data
            ? [action.payload.data]
            : state.searchedMovies,
      };
    case FETCH_DATA_REFRESH:
      return {
        ...state,
        loading: false,
        searchedMovies: null,
        titleMovies: null,
      };
    case FETCH_DATA_ERROR:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
};
