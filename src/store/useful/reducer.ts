import {
  SET_SEARCH_VALUE,
  SET_MODAL_STATE,
  INCREAS_PAGES_COUNT,
  REFRESH_PAGES_COUNT,
  SET_FAVORITE_MOVIES_ID,
  REMOVE_FAVORITE_MOVIES_ID,
  SET_MODAL_SHARE_STATE,
} from "./actionTypes";
import { ActionTypes, ISearchState, ISetModalState } from "./interfaces";

const initialState: ISearchState = {
  searchValue: "",
  modalState: false,
  modalShareState: false,
  pagesCount: 1,
  favoriteMoviesIds: [],
};

export const searchReducer = (
  state = initialState,
  action: ActionTypes
): ISearchState => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return { ...state, searchValue: action.payload.value };
    case SET_MODAL_STATE:
      return { ...state, modalState: !state.modalState };
    case SET_MODAL_SHARE_STATE:
      return { ...state, modalShareState: !state.modalShareState };
    case INCREAS_PAGES_COUNT:
      return { ...state, pagesCount: state.pagesCount + 1 };
    case REFRESH_PAGES_COUNT:
      return { ...state, pagesCount: 1 };
    case SET_FAVORITE_MOVIES_ID:
      return {
        ...state,
        favoriteMoviesIds: state.favoriteMoviesIds.includes(action.payload.id)
          ? state.favoriteMoviesIds
          : [...state.favoriteMoviesIds, action.payload.id],
      };
    case REMOVE_FAVORITE_MOVIES_ID:
      return {
        ...state,
        favoriteMoviesIds: state.favoriteMoviesIds.filter(
          (id) => id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
