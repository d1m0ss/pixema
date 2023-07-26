import { ThunkDispatch } from "redux-thunk";
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
import {
  ActionTypes,
  IFetchDataErrorAction,
  IFetchDataRefreshAction,
  IFetchDataRemoveFavoriteMovieAction,
  IFetchDataRequestAction,
  IFetchDataSuccessAction,
  IFetchDataSuccessFavoriteAction,
  IFetchDataSuccessSearchAction,
  IFetchDataSuccessSingleAction,
  IFetchDataSuccessTitleAction,
  IFetchDataSuccessTrendAction,
  MovieType,
} from "./interfaces";
import { RootState } from "../store";
import axios from "axios";
import { urls } from "../../api/urls";

export const fetchDatatRequestAction = (): IFetchDataRequestAction => ({
  type: FETCH_DATA_REQUEST,
});

const fetchDatatSuccessAction = (data: any): IFetchDataSuccessAction => ({
  type: FETCH_DATA_SUCCESS,
  payload: { data },
});

export const fetchDatatSuccessTitleAction = (
  data: any
): IFetchDataSuccessTitleAction => ({
  type: FETCH_DATA_SUCCESS_TITLE,
  payload: { data },
});

const fetchDatatSuccessSearchAction = (
  data: any
): IFetchDataSuccessSearchAction => ({
  type: FETCH_DATA_SUCCESS_SEARCH,
  payload: { data },
});

const fetchDatatSuccessSingleAction = (
  data: any
): IFetchDataSuccessSingleAction => ({
  type: FETCH_DATA_SUCCESS_SINGLE,
  payload: { data },
});

export const fetchDatatSuccessTrendAction = (
  data: any
): IFetchDataSuccessTrendAction => ({
  type: FETCH_DATA_SUCCESS_TREND,
  payload: { data },
});

export const fetchDatatSuccessFavoriteAction = (
  data: any
): IFetchDataSuccessFavoriteAction => ({
  type: FETCH_DATA_SUCCESS_FAVORITE,
  payload: { data },
});

export const fetchDatatRefreshAction = (): IFetchDataRefreshAction => ({
  type: FETCH_DATA_REFRESH,
});

export const fetchDatatRemoveFavoriteMovieAction = (
  id: string
): IFetchDataRemoveFavoriteMovieAction => ({
  type: FETCH_DATA_REMOVE_FAVORITE_MOVIE,
  payload: { id },
});

const fetchDatatErrorAction = (error: string): IFetchDataErrorAction => ({
  type: FETCH_DATA_ERROR,
  payload: { error },
});

export const fetchMovie =
  (params: string, type: MovieType) =>
  async (dispatch: ThunkDispatch<RootState, unknown, ActionTypes>) => {
    try {
      dispatch(fetchDatatRequestAction());
      const data = (await axios.get(`${urls.GET_URL}${params}`)).data;
      if ("Error" in data) {
        dispatch(fetchDatatErrorAction(data.Error));
      } else {
        switch (type) {
          case "Search":
            dispatch(fetchDatatSuccessSearchAction(data));
            break;
          case "Single":
            dispatch(fetchDatatSuccessSingleAction(data));
            break;
          case "Title":
            dispatch(fetchDatatSuccessTitleAction(data));
            break;
          case "Trend":
            dispatch(fetchDatatSuccessTrendAction(data));
            break;
          case "Favorite":
            dispatch(fetchDatatSuccessFavoriteAction(data));
            break;
          default:
            dispatch(fetchDatatSuccessAction(data));
            break;
        }
      }
    } catch {
      dispatch(fetchDatatErrorAction("Some server error"));
    }
  };
