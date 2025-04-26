import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requests from "../../api/apiClient";
import { toast } from "react-toastify";

const initialState = {
  videoModalList: [],
  error: null,
};

export const getVideoForModal = createAsyncThunk(
  "getVideoForModal",
  async (id, thunkAPI) => {
    try {
      const response = await requests.videoModal.videos(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
    }
  }
);

export const videoModalSlice = createSlice({
  name: "movieDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVideoForModal.fulfilled, (state, action) => {
      state.videoModalList = action.payload;
    });
    builder.addCase(getVideoForModal.rejected, (state, action) => {
      state.error = action.payload;
      toast.error("Failed getVideoForModal");
    });
  },
});

export const {} = videoModalSlice.actions;

export default videoModalSlice.reducer;
