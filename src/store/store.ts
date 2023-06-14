import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { moviesReducer } from "./movies/reducer";

export const store = configureStore({
  reducer: {
    //  movies: moviesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
