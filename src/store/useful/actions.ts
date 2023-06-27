import { SET_SEARCH_VALUE, SET_MODAL_STATE, INCREAS_PAGES_COUNT, REFRESH_PAGES_COUNT } from "./actionTypes";
import { ISetSearchValue, ISetModalState, IRefreshPages, IIncreasPages } from "./interfaces";

export const setSearchValue = (value: string): ISetSearchValue => {
  return { type: SET_SEARCH_VALUE, payload: { value } };
};

export const setModalState = (): ISetModalState => {
  return { type: SET_MODAL_STATE };
};

export const increasPagesCount = (): IIncreasPages => {
  return { type: INCREAS_PAGES_COUNT };
};

export const refreshPagesCount = (): IRefreshPages => {
  return { type: REFRESH_PAGES_COUNT };
};
