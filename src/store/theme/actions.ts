import { SET_DARK, SET_LIGHT } from "./actionTypes";
import { ISetDarkTheme, ISetLogoutAction } from "./interfaces";

export const setDarkTheme = (): ISetDarkTheme => ({
  type: SET_DARK,
  theme: "dark",
});

export const setLightTheme = (): ISetLogoutAction => ({
  type: SET_LIGHT,
  theme: "light",
});
