import { SET_LOGGED, SET_LOGOUT } from "./actionTypes";
import { IAuthState, AuthType } from "./interfaces";

const initialState: IAuthState = {
  authStatus: false,
};

export const authReduser = (state = initialState, action: AuthType): IAuthState => {
  switch (action.type) {
    case SET_LOGGED:
      return { ...state, authStatus: true };
    case SET_LOGOUT:
      return { ...state, authStatus: false };
    default:
      return state;
  }
};
