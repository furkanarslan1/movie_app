import { createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../storage/storageService";

// const getWatchListFromStorage = () => {
//   try {
//     const storedWatchList = localStorage.get("watchList");
//     return storedWatchList ? JSON.parse(storedWatchList) : [];
//   } catch (error) {
//     console.log(error);
//   }
// };

// const writeWatcListToStorage = (watchList) => {
//   try {
//     localStorage.set("watchList", JSON.stringify(watchList));
//   } catch (error) {
//     console.log(error);
//   }
// };

export const watchListSlice = createSlice({
  name: "watchList",
  initialState: {
    watchLists: getItem("watchList"),
  },
  reducers: {
    addToWatchList: (state, action) => {
      const findMovie = state.watchLists?.some(
        (movie) => movie.id === action.payload.id
      );
      if (!findMovie) {
        state.watchLists = [...state.watchLists, action.payload];
        setItem("watchList", state.watchLists);
      }
    },
    removeFromWatchList: (state, action) => {
      const filtredMovies = state.watchLists.filter(
        (movie) => movie.id !== action.payload.id
      );
      state.watchLists = filtredMovies;
      setItem("watchList", state.watchLists);
    },
  },
});

export const { addToWatchList, removeFromWatchList } = watchListSlice.actions;

export default watchListSlice.reducer;
