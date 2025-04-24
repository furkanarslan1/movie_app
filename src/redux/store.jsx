import { configureStore } from "@reduxjs/toolkit";
import { genreSlice } from "./slices/genreSlice";
import { movieDetailSlice } from "./slices/movieDetailSlice";
import { movieCategorySlice } from "./slices/movieCategorySlice";

export const store = configureStore({
  reducer: {
    genres: genreSlice.reducer,
    movieDetail: movieDetailSlice.reducer,
    movieCategory: movieCategorySlice.reducer,
  },
});
