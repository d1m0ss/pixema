import { ThunkDispatch } from "redux-thunk";
import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REFRESH,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SEARCH_SUCCESS,
  FETCH_DATA_SUCCESS,
} from "./actionTypes";
import {
  ActionTypes,
  IFetchDataErrorAction,
  IFetchDataRefreshAction,
  IFetchDataRequestAction,
  IFetchDataSuccessAction,
  IMovie,
} from "./interfaces";
import { RootState } from "../store";
import axios from "axios";
import { urls } from "../../api/urls";

const fetchDatatRequestAction = (): IFetchDataRequestAction => ({
  type: FETCH_DATA_REQUEST,
});

const fetchDatatSuccessAction = (data: IMovie): IFetchDataSuccessAction => ({
  type: FETCH_DATA_SUCCESS,
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
  (params: string) =>
  async (dispatch: ThunkDispatch<RootState, unknown, ActionTypes>) => {
    try {
      dispatch(fetchDatatRequestAction());
      const data = (await axios.get(`${urls.GET_URL}${params}`)).data;
      console.log(data);
      "Error" in data
        ? dispatch(fetchDatatErrorAction(data.Error))
        : dispatch(fetchDatatSuccessAction(data));
    } catch {
      dispatch(fetchDatatErrorAction("Some server error"));
    }
  };
