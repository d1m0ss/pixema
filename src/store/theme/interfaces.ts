import { SET_DARK, SET_LIGHT } from "./actionTypes";

export interface IThemeState {
  theme: "dark" | "light";
}
export interface ISetDarkTheme {
  type: typeof SET_DARK;
  theme: "dark";
}

export interface ISetLogoutAction {
  type: typeof SET_LIGHT;
  theme: "light";
}

export type AuthType = ISetDarkTheme | ISetLogoutAction;
