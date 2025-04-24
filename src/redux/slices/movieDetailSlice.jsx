import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests from "../../api/apiClient";

const initialState = {
  movieDetail: [],
};

export const getMovieDetails = createAsyncThunk(
  "getMovieDetails",
  async (id) => {
    try {
      const response = await requests.movie.detail(id);
      return response;
    } catch (error) {
      console.log(error);
    } finally {
    }
  }
);

export const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieDetails.fulfilled, (state, action) => {
      state.movieDetail = action.payload;
    });
  },
});

export const {} = movieDetailSlice.actions;

export default movieDetailSlice.reducer;
