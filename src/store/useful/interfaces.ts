import {
  SET_SEARCH_VALUE,
  SET_MODAL_STATE,
  INCREAS_PAGES_COUNT,
  REFRESH_PAGES_COUNT,
  SET_FAVORITE_MOVIES_ID,
  REMOVE_FAVORITE_MOVIES_ID,
  SET_MODAL_SHARE_STATE,
} from "./actionTypes";

export interface ISearchState {
  searchValue: string;
  modalState: boolean;
  modalShareState: boolean;
  pagesCount: number;
  favoriteMoviesIds: string[];
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

export interface ISetModalShareState {
  type: typeof SET_MODAL_SHARE_STATE;
}

export interface IIncreasPages {
  type: typeof INCREAS_PAGES_COUNT;
}

export interface IRefreshPages {
  type: typeof REFRESH_PAGES_COUNT;
}

export interface ISetFavoriteMoviesId {
  type: typeof SET_FAVORITE_MOVIES_ID;
  payload: { id: string };
}

export interface IRemoveFavoriteMoviesId {
  type: typeof REMOVE_FAVORITE_MOVIES_ID;
  payload: { id: string };
}

export type ActionTypes =
  | ISetSearchValue
  | ISetModalState
  | ISetModalShareState
  | IIncreasPages
  | IRefreshPages
  | ISetFavoriteMoviesId
  | IRemoveFavoriteMoviesId;
