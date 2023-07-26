import { ThunkDispatch } from "redux-thunk";
import {
  SET_USER_EMAIL,
  SET_USER_ID,
  SET_USERNAME,
  FETCH_USER_ERROR,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./actionTypes";
import { ISetEmail, ISetUsername, ISetUserId, UserType, IFetchDataRequestAction, IFetchDataSuccessAction, IFetchDataErrorAction, IUserResponse } from "./interfaces";
import { RootState } from "../store";
import { getUserInfo } from "../../api/getUSerInfo";

const fetchuserRequestAction = (): IFetchDataRequestAction => ({
  type: FETCH_USER_REQUEST,
});

const fetchuserSuccessAction = (data: IUserResponse): IFetchDataSuccessAction => ({
  type: FETCH_USER_SUCCESS,
  payload: { data },
});
const fetchuserErrorAction = (error: string): IFetchDataErrorAction => ({
  type: FETCH_USER_ERROR,
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
      dispatch(fetchuserRequestAction());
      dispatch(fetchuserSuccessAction(await getUserInfo()));
    } catch {
      dispatch(fetchuserErrorAction("Some server error"));
    }
  };