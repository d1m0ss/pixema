import { SET_SEARCH_VALUE, SET_MODAL_STATE } from "./actionTypes";

export interface ISearchState {
  searchValue: string;
  modalState: boolean;
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

export type ActionTypes = ISetSearchValue | ISetModalState;
