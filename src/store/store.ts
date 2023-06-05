import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { multiSelect } from "./multiSelect/reducer";


export const store = configureStore({
  reducer: multiSelect,
});

export type RootState = ReturnType<typeof store.getState>;
