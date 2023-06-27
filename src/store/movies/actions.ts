import { ThunkDispatch } from "redux-thunk";
import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REFRESH,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_SUCCESS_SEARCH,
  FETCH_DATA_SUCCESS_SINGLE,
  FETCH_DATA_SUCCESS_TITLE,
  FETCH_DATA_SUCCESS_TREND,
} from "./actionTypes";
import {
  ActionTypes,
  IFetchDataErrorAction,
  IFetchDataRefreshAction,
  IFetchDataRequestAction,
  IFetchDataSuccessAction,
  IFetchDataSuccessSearchAction,
  IFetchDataSuccessSingleAction,
  IFetchDataSuccessTitleAction,
  IFetchDataSuccessTrendAction,
  IMovie,
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

const fetchDatatSuccessTitleAction = (
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

const fetchDatatSuccessTrendAction = (
  data: any
): IFetchDataSuccessTrendAction => ({
  type: FETCH_DATA_SUCCESS_TREND,
  payload: { data },
});

export const fetchDatatRefreshAction = (): IFetchDataRefreshAction => ({
  type: FETCH_DATA_REFRESH,
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
          default:
            break;
        }
      }
    } catch {
      dispatch(fetchDatatErrorAction("Some server error"));
    }
  };
