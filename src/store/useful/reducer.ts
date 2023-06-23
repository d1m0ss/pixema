import { SET_SEARCH_VALUE, SET_MODAL_STATE } from "./actionTypes";
import { ActionTypes, ISearchState, ISetModalState } from "./interfaces";

const initialState: ISearchState = {
  searchValue: "",
  modalState: false,
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
    default:
      return state;
  }
};
