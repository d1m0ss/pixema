import { SET_DARK, SET_LIGHT } from "./actionTypes";
import { IThemeState, AuthType } from "./interfaces";

const initialState: IThemeState = {
  theme: "dark",
};

export const themeReducer = (
  state = initialState,
  action: AuthType
): IThemeState => {
  switch (action.type) {
    case SET_DARK:
      return { ...state, theme: action.theme };
    case SET_LIGHT:
      return { ...state, theme: action.theme };
    default:
      return state;
  }
};
