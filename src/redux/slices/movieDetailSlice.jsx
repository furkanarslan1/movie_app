import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests from "../../api/apiClient";
import { toast } from "react-toastify";

const initialState = {
  movieDetail: [],
  error: null,
  status: "idle",
};

export const getMovieDetails = createAsyncThunk(
  "getMovieDetails",
  async (id, thunkAPI) => {
    try {
      const response = await requests.movie.detail(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
    }
  }
);

export const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieDetails.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getMovieDetails.fulfilled, (state, action) => {
      state.status = "idle";

      state.movieDetail = action.payload;
    });
    builder.addCase(getMovieDetails.rejected, (state, action) => {
      state.status = "idle";

      state.error = action.payload;
      toast.error("Failed getMovieDetails");
    });
  },
});

export const {} = movieDetailSlice.actions;

export default movieDetailSlice.reducer;
