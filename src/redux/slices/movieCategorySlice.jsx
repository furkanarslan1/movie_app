import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests from "../../api/apiClient";

export const getPopularMovies = createAsyncThunk(
  "movies/fetchpopular",
  async () => {
    const response = await requests.movie.popular();
    console.log("popular");

    return response.results;
  }
);

export const getTopRatedMovies = createAsyncThunk(
  "movies/fetchTopRated",
  async () => {
    const response = await requests.movie.topRated();
    console.log("toprated");

    return response.results;
  }
);

export const getUpcomingMovies = createAsyncThunk(
  "movies/fetchUpcoming",
  async () => {
    const response = await requests.movie.upcoming();
    console.log("upcoming");

    return response.results;
  }
);

export const getDiscoverMovies = createAsyncThunk(
  "movies/fetchDiscover",
  async () => {
    const response = await requests.movie.discover();
    console.log("discover");

    return response.results;
  }
);

export const getTv = createAsyncThunk("movies/fetchTV", async () => {
  const response = await requests.movie.tv();
  console.log("tv");

  return response.results;
});

export const getVideo = createAsyncThunk("movies/fetchVideo", async () => {
  const response = await requests.movie.video();
  console.log("video");

  return response.results;
});

export const movieCategorySlice = createSlice({
  name: "movieCategory",
  initialState: {
    popular: [],
    topRated: [],
    upcoming: [],
    discover: [],
    video: [],
    tv: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUpcomingMovies.fulfilled, (state, action) => {
      state.upcoming = action.payload;
    });
    builder.addCase(getTopRatedMovies.fulfilled, (state, action) => {
      state.topRated = action.payload;
    });
    builder.addCase(getPopularMovies.fulfilled, (state, action) => {
      state.popular = action.payload;
    });
    builder.addCase(getDiscoverMovies.fulfilled, (state, action) => {
      state.discover = action.payload;
    });
    builder.addCase(getVideo.fulfilled, (state, action) => {
      state.video = action.payload;
    });
    builder.addCase(getTv.fulfilled, (state, action) => {
      state.tv = action.payload;
    });
  },
});

export const {} = movieCategorySlice.actions;
export default movieCategorySlice.reducer;
