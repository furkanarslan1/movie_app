import { configureStore } from "@reduxjs/toolkit";
import { genreSlice } from "./slices/genreSlice";

export const store = configureStore({
  reducer: {
    genres: genreSlice.reducer,
  },
});
