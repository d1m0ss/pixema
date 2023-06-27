import {
  SET_SEARCH_VALUE,
  SET_MODAL_STATE,
  INCREAS_PAGES_COUNT,
  REFRESH_PAGES_COUNT,
} from "./actionTypes";
import { ActionTypes, ISearchState, ISetModalState } from "./interfaces";

const initialState: ISearchState = {
  searchValue: "",
  modalState: false,
  pagesCount: 1,
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
    case INCREAS_PAGES_COUNT:
      return { ...state, pagesCount: state.pagesCount + 1 };
    case REFRESH_PAGES_COUNT:
      return { ...state, pagesCount: 1 };
    default:
      return state;
  }
};
