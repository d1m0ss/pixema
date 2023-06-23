import { SET_SEARCH_VALUE, SET_MODAL_STATE } from "./actionTypes";
import { ISetSearchValue, ISetModalState } from "./interfaces";

export const setSearchValue = (value: string): ISetSearchValue => {
  return { type: SET_SEARCH_VALUE, payload: { value } };
};

export const setModalState = (): ISetModalState => {
  return { type: SET_MODAL_STATE };
};
