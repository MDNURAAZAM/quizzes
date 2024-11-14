import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const initialState = {
  accessToken: undefined,
  refreshToken: undefined,
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
      apiSlice.util.invalidateTags(["quizAttempt", "quizzes"]);
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.refreshToken = undefined;
      state.user = undefined;
      apiSlice.util.invalidateTags(["quizAttempt", "quizzes"]);
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
