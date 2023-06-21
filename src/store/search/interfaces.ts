import { SET_SEARCH_VALUE } from "./actionTypes";

export interface ISearchState {
  searchValue: string;
}

export interface ISetSearchValue {
  type: typeof SET_SEARCH_VALUE;
  payload: {
    value: string;
  };
}

export type ActionTypes = ISetSearchValue;
