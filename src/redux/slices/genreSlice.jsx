import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests from "../../api/apiClient";
import { act } from "react";
import { toast } from "react-toastify";

const initialState = {
  genreList: [],
  genreDetailList: [],
  error: null,
};

export const getGenre = createAsyncThunk("getGenre", async (_, thunkAPI) => {
  try {
    const response = await requests.genres.list();
    return response.genres;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  } finally {
  }
});

export const getGenreDetails = createAsyncThunk(
  "getGenreDetails",
  async (id, thunkAPI) => {
    try {
      const response = await requests.genres.details(id);
      return response.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
    builder.addCase(getGenre.rejected, (state, action) => {
      state.error = action.payload;
      toast.error("Genre list could not be loaded!");
    });
    builder.addCase(getGenreDetails.fulfilled, (state, action) => {
      console.log("gelen details", action.payload);
      state.genreDetailList = action.payload;
    });
    builder.addCase(getGenreDetails.rejected, (state, action) => {
      state.error = action.payload;
      toast.error("Genre details could not be loaded!");
    });
  },
});

export const {} = genreSlice.actions;

export default genreSlice.reducer;
