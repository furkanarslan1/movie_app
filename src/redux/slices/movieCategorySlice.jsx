import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests from "../../api/apiClient";
import { toast } from "react-toastify";

export const getPopularMovies = createAsyncThunk(
  "movies/fetchpopular",
  async (_, thunkAPI) => {
    try {
      const response = await requests.movie.popular();
      console.log("popular");

      return response.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTopRatedMovies = createAsyncThunk(
  "movies/fetchTopRated",
  async (_, thunkAPI) => {
    try {
      const response = await requests.movie.topRated();
      console.log("toprated");

      return response.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUpcomingMovies = createAsyncThunk(
  "movies/fetchUpcoming",
  async (_, thunkAPI) => {
    try {
      const response = await requests.movie.upcoming();
      console.log("upcoming");

      return response.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDiscoverMovies = createAsyncThunk(
  "movies/fetchDiscover",
  async (_, thunkAPI) => {
    try {
      const response = await requests.movie.discover();
      console.log("discover");

      return response.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTv = createAsyncThunk("movies/fetchTV", async (_, thunkAPI) => {
  try {
    const response = await requests.movie.tv();
    console.log("tv");

    return response.results;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getVideo = createAsyncThunk(
  "movies/fetchVideo",
  async (_, thunkAPI) => {
    try {
      const response = await requests.movie.video();
      console.log("video");

      return response.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const movieCategorySlice = createSlice({
  name: "movieCategory",
  initialState: {
    popular: [],
    topRated: [],
    upcoming: [],
    discover: [],
    video: [],
    tv: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUpcomingMovies.fulfilled, (state, action) => {
      state.upcoming = action.payload;
    });
    builder.addCase(getUpcomingMovies.rejected, (state, action) => {
      state.error = action.payload;
      toast.error("Failed getUpcomingMovies");
    });
    builder.addCase(getTopRatedMovies.fulfilled, (state, action) => {
      state.topRated = action.payload;
    });
    builder.addCase(getTopRatedMovies.rejected, (state, action) => {
      state.error = action.payload;
      toast.error("Failed getTopRatedMovies");
    });
    builder.addCase(getPopularMovies.fulfilled, (state, action) => {
      state.popular = action.payload;
    });
    builder.addCase(getPopularMovies.rejected, (state, action) => {
      state.error = action.payload;
      toast.error("Failed getPopularMovies");
    });
    builder.addCase(getDiscoverMovies.fulfilled, (state, action) => {
      state.discover = action.payload;
    });
    builder.addCase(getDiscoverMovies.rejected, (state, action) => {
      state.error = action.payload;
      toast.error("Failed getDiscoverMovies");
    });
    builder.addCase(getVideo.fulfilled, (state, action) => {
      state.video = action.payload;
    });
    builder.addCase(getVideo.rejected, (state, action) => {
      state.error = action.payload;
      toast.error("Failed getVideo");
    });
    builder.addCase(getTv.fulfilled, (state, action) => {
      state.tv = action.payload;
    });
    builder.addCase(getTv.rejected, (state, action) => {
      state.error = action.payload;
      toast.error("Failed getTv");
    });
  },
});

export const {} = movieCategorySlice.actions;
export default movieCategorySlice.reducer;
