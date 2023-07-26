import { SET_LOGGED, SET_LOGOUT } from "./actionTypes";

export interface IAuthState {
  authStatus: boolean;
}
export interface ISetLoggedAction {
  type: typeof SET_LOGGED;
}

export interface ISetLogoutAction {
  type: typeof SET_LOGOUT;
}

export type AuthType = ISetLoggedAction | ISetLogoutAction;
