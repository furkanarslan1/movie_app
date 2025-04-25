import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests from "../../api/apiClient";

export const getDiscoverTV = createAsyncThunk("fetch/DiscoverTV", async () => {
  const response = await requests.tvShows.discoverTV();
  return response.results;
});

export const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState: {
    tvDiscovery: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDiscoverTV.fulfilled, (state, action) => {
      state.tvDiscovery = action.payload;
    });
  },
});

export const {} = tvShowsSlice.reducer;
export default tvShowsSlice.reducer;
