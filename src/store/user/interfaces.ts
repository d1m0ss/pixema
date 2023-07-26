import {
  FETCH_USER_ERROR,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  SET_USER_EMAIL,
  SET_USER_ID,
  SET_USERNAME,
} from "./actionTypes";

export interface IUserResponse {
  username: string;
  id: string;
  email: string;
}

interface IUserSet {
  payload: { data: string };
}

export interface IUserState extends IUserResponse {
  isLoading: boolean;
  error: string;
  user: IUserResponse | null;
}

export interface ISetEmail extends IUserSet {
  type: typeof SET_USER_EMAIL;
}

export interface ISetUserId extends IUserSet {
  type: typeof SET_USER_ID;
}

export interface ISetUsername extends IUserSet {
  type: typeof SET_USERNAME;
}

export interface IFetchDataRequestAction {
  type: typeof FETCH_USER_REQUEST;
}

export interface IFetchDataSuccessAction {
  type: typeof FETCH_USER_SUCCESS;
  payload: {
    data: IUserResponse | null;
  };
}

export interface IFetchDataErrorAction {
  type: typeof FETCH_USER_ERROR;
  payload: {
    error: string;
  };
}

export type UserType =
  | ISetEmail
  | ISetUsername
  | ISetUserId
  | IFetchDataRequestAction
  | IFetchDataSuccessAction
  | IFetchDataErrorAction;
