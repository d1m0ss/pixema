import { SET_SEARCH_VALUE } from "./actionTypes";
import { ActionTypes, ISearchState } from "./interfaces";

const initialState: ISearchState = {
  searchValue: "",
};

export const searchReducer = (
  state = initialState,
  action: ActionTypes
): ISearchState => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return { ...state, searchValue: action.payload.value };

    default:
      return state;
  }
};
