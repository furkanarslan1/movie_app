import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests from "../../api/apiClient";

const initialState = {
  genreList: [],
};

export const getGenre = createAsyncThunk("getGenre", async () => {
  try {
    return await requests.genres.list();
  } catch (error) {
    console.log(error);
  } finally {
  }
});

export const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGenre.fulfilled, (state, action) => {
      console.log("Gelen veri:", action.payload);
      state.genreList = action.payload;
    });
  },
});

export const {} = genreSlice.actions;

export default genreSlice.reducer;
