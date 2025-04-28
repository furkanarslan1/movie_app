import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests from "../../api/apiClient";
import { toast } from "react-toastify";

export const getDiscoverTV = createAsyncThunk(
  "fetch/DiscoverTV",
  async (_, thunkAPI) => {
    try {
      const response = await requests.tvShows.discoverTV();
      return response.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState: {
    tvDiscovery: [],
    error: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDiscoverTV.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getDiscoverTV.fulfilled, (state, action) => {
      state.status = "idle";

      state.tvDiscovery = action.payload;
    });
    builder.addCase(getDiscoverTV.rejected, (state, action) => {
      state.status = "idle";

      state.error = action.payload;
      toast.error("Failed getDiscoverTV");
    });
  },
});

export const {} = tvShowsSlice.reducer;
export default tvShowsSlice.reducer;
