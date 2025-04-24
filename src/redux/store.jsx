import { configureStore } from "@reduxjs/toolkit";
import { genreSlice } from "./slices/genreSlice";
import { movieDetailSlice } from "./slices/movieDetailSlice";

export const store = configureStore({
  reducer: {
    genres: genreSlice.reducer,
    movieDetail: movieDetailSlice.reducer,
  },
});
