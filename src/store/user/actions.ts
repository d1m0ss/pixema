import { ThunkDispatch } from "redux-thunk";
import {
  SET_USER_EMAIL,
  SET_USER_ID,
  SET_USERNAME,
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./actionTypes";
import { ISetEmail, ISetUsername, ISetUserId, UserType, IFetchDataRequestAction, IFetchDataSuccessAction, IFetchDataErrorAction, IUserResponse } from "./interfaces";
import { RootState } from "../store";
import { getUserInfo } from "../../api/getUSerInfo";

const fetchDatatRequestAction = (): IFetchDataRequestAction => ({
  type: FETCH_DATA_REQUEST,
});

const fetchDatatSuccessAction = (data: IUserResponse): IFetchDataSuccessAction => ({
  type: FETCH_DATA_SUCCESS,
  payload: { data },
});
const fetchDatatErrorAction = (error: string): IFetchDataErrorAction => ({
  type: FETCH_DATA_ERROR,
  payload: { error },
});

export const setUserEmailAction = (data: string): ISetEmail => ({
  type: SET_USER_EMAIL,
  payload: { data },
});

export const setUserIdAction = (data: string): ISetUserId => ({
  type: SET_USER_ID,
  payload: { data },
});

export const setUsernameAction = (data: string): ISetUsername => ({
  type: SET_USERNAME,
  payload: { data },
});

export const setUserInfo =
  (params: string,) =>
  async (dispatch: ThunkDispatch<RootState, unknown, UserType>) => {
    try {
      dispatch(fetchDatatRequestAction());
      dispatch(fetchDatatSuccessAction(await getUserInfo()));
    } catch {
      dispatch(fetchDatatErrorAction("Some server error"));
    }
  };