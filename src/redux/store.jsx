import { configureStore } from "@reduxjs/toolkit";
import { genreSlice } from "./slices/genreSlice";
import { movieDetailSlice } from "./slices/movieDetailSlice";
import { movieCategorySlice } from "./slices/movieCategorySlice";
import { tvShowsSlice } from "./slices/tvShowsSlice";
import { watchListSlice } from "./slices/watchListSlice";
import { registerSlice } from "./slices/registerSlice";
import { videoModalSlice } from "./slices/videoModalSlice";

export const store = configureStore({
  reducer: {
    genres: genreSlice.reducer,
    movieDetail: movieDetailSlice.reducer,
    movieCategory: movieCategorySlice.reducer,
    tvShows: tvShowsSlice.reducer,
    watchList: watchListSlice.reducer,
    register: registerSlice.reducer,
    videoModal: videoModalSlice.reducer,
  },
});
