import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests from "../../api/apiClient";

const initialState = {
  genreList: [],
  genreDetailList: [],
};

export const getGenre = createAsyncThunk("getGenre", async () => {
  try {
    const response = await requests.genres.list();
    return response.genres;
  } catch (error) {
    console.log(error);
  } finally {
  }
});

export const getGenreDetails = createAsyncThunk(
  "getGenreDetails",
  async (id) => {
    try {
      const response = await requests.genres.details(id);
      return response.results;
    } catch (error) {
      console.log(error);
    } finally {
    }
  }
);

export const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGenre.fulfilled, (state, action) => {
      console.log("Gelen veri:", action.payload);
      state.genreList = action.payload;
    });
    builder.addCase(getGenreDetails.fulfilled, (state, action) => {
      console.log("gelen details", action.payload);
      state.genreDetailList = action.payload;
    });
  },
});

export const {} = genreSlice.actions;

export default genreSlice.reducer;
