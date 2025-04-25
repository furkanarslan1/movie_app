import { createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../storage/storageService";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    userList: getItem("users", []),
  },
  reducers: {
    addToUsers: (state, action) => {
      const findUser = state.userList?.some(
        (user) => user.username === action.payload.username
      );
      if (!findUser) {
        state.userList = [...state.userList, action.payload];
        setItem("users", state.userList);
      }
    },
  },
});

export const { addToUsers } = registerSlice.actions;

export default registerSlice.reducer;
