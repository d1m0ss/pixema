import { SET_SEARCH_VALUE } from "./actionTypes";
import { ISetSearchValue } from "./interfaces";

export const setSearchValue = (value: string): ISetSearchValue => {
  return { type: SET_SEARCH_VALUE, payload: { value } };
};
