import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./actionTypes";
import { IMoviesState, ActionTypes } from "./interfaces";

const initialState: IMoviesState = {
  loading: false,
  movies: null,
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
      return { ...state, loading: false, movies: action.payload.data };
    case FETCH_DATA_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};
