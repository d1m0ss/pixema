import { SELECT_ADD, SELECT_DELITE } from "./actionTypes";
import { ISelectState, seletTypes } from "./interfaces";

const initialState: ISelectState = {
  text: "",
};

export const multiSelect = (
  state: ISelectState = initialState,
  { type, text }: seletTypes
): ISelectState => {
  switch (type) {
    case SELECT_ADD:
      return state;
    case SELECT_DELITE:
      return state;
    default:
      return state;
  }
};
