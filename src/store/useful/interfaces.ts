import {
  SET_SEARCH_VALUE,
  SET_MODAL_STATE,
  INCREAS_PAGES_COUNT,
  REFRESH_PAGES_COUNT,
} from "./actionTypes";

export interface ISearchState {
  searchValue: string;
  modalState: boolean;
  pagesCount: number;
}

export interface ISetSearchValue {
  type: typeof SET_SEARCH_VALUE;
  payload: {
    value: string;
  };
}

export interface ISetModalState {
  type: typeof SET_MODAL_STATE;
}

export interface IIncreasPages {
  type: typeof INCREAS_PAGES_COUNT;
}

export interface IRefreshPages {
  type: typeof REFRESH_PAGES_COUNT;
}

export type ActionTypes =
  | ISetSearchValue
  | ISetModalState
  | IIncreasPages
  | IRefreshPages;
