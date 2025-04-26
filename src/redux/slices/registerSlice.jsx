import { createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../storage/storageService";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    userList: getItem("users", []),
    userValid: getItem("userValid", []),
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
    userEnter: (state, action) => {
      const isUser = state.userList.find(
        (user) =>
          user.username === action.payload.username &&
          user.password === action.payload.password
      );
      if (isUser) {
        state.userValid = isUser;
        setItem("userValid", isUser);
      }
    },
  },
});

export const { addToUsers, userEnter } = registerSlice.actions;

export default registerSlice.reducer;
