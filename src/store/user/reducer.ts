import {
  FETCH_USER_ERROR,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  SET_USER_EMAIL,
  SET_USER_ID,
  SET_USERNAME,
} from "./actionTypes";
import { IUserState, UserType } from "./interfaces";

const initialState: IUserState = {
  email: "",
  id: "",
  username: "",
  isLoading: false,
  error: "",
  user: null,
};

export const userReduser = (
  state = initialState,
  action: UserType
): IUserState => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_USER_SUCCESS:
      return { ...state, isLoading: false, user: action.payload.data };
    case FETCH_USER_ERROR:
      return { ...state, isLoading: false, error: action.payload.error };
    case SET_USER_EMAIL:
      return { ...state, email: action.payload.data };
    case SET_USER_ID:
      return { ...state, id: action.payload.data };
    case SET_USERNAME:
      return { ...state, username: action.payload.data };
    default:
      return state;
  }
};
