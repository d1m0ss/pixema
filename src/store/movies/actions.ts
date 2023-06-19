import { ThunkDispatch } from "redux-thunk";
import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./actionTypes";
import {
  ActionTypes,
  IFetchDataErrorAction,
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

const fetchDatatErrorAction = (): IFetchDataErrorAction => ({
  type: FETCH_DATA_ERROR,
  payload: { error: "Unknown server error" },
});

export const fetchMovies =
  (params: string) =>
  async (dispatch: ThunkDispatch<RootState, unknown, ActionTypes>) => {
    try {
      dispatch(fetchDatatRequestAction());
      const data = (await axios.get(`${urls.GET_URL}${params}`)).data;
      dispatch(fetchDatatSuccessAction(data));
    } catch (error) {
      dispatch(fetchDatatErrorAction());
    }
  };
