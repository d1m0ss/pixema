import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { moviesReducer } from "./movies/reducer";
import { searchReducer } from "./search/reducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  search: searchReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
