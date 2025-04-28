import { createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../storage/storageService";

import { getItem as getStorageItem } from "../storage/storageService";
import { toast } from "react-toastify";

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

const getUserKey = () => {
  const userValid = getStorageItem("userValid", null);
  return userValid ? `watchlist_${userValid.username}` : null;
};

export const watchListSlice = createSlice({
  name: "watchList",
  initialState: {
    // watchLists: getItem("watchList"),
    watchLists: [],
  },
  reducers: {
    loadWatchList: (state) => {
      const key = getUserKey();
      if (key) {
        state.watchLists = getItem(key, []);
      } else {
        state.watchLists = [];
      }
    },
    addToWatchList: (state, action) => {
      const key = getUserKey();
      if (!key) {
        toast.error("You have to sign-in");
        return;
      }

      const findMovie = state.watchLists?.some(
        (movie) => movie.id === action.payload.id
      );
      if (!findMovie) {
        state.watchLists = [...state.watchLists, action.payload];
        setItem(key, state.watchLists);
      }
    },
    removeFromWatchList: (state, action) => {
      const key = getUserKey();
      if (!key) return;
      const filtredMovies = state.watchLists.filter(
        (movie) => movie.id !== action.payload.id
      );
      state.watchLists = filtredMovies;
      setItem(key, state.watchLists);
    },
  },
});

export const { addToWatchList, removeFromWatchList, loadWatchList } =
  watchListSlice.actions;

export default watchListSlice.reducer;
