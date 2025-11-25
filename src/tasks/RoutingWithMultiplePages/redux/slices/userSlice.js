import { createSlice } from "@reduxjs/toolkit";
import { cookieUtil } from "../../utils/Cookies";
export const isAuthenticatedCheck = () => {
  const isAuth = cookieUtil.getCookie("authEmail");
  return !!isAuth;
};
const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
    authUser: "",
    allUsers: [],
  },
  reducers: {
    checkAuth: (state) => {
      state.isAuth = isAuthenticatedCheck();
      state.authUser = cookieUtil.getCookie("username");
    },
    login: (state, action) => {
      cookieUtil.setCookie("authEmail", action.payload.email);
      cookieUtil.setCookie("username", action.payload.username);
      state.authUser = action.payload.username;
      state.isAuth = true;
    },
    logout: (state) => {
      state.authUser = "";
      state.isAuth = false;
      cookieUtil.eraseCookie("authEmail");
    },
    signUp: (state, action) => {
      localStorage.setItem(
        "allUsers",
        JSON.stringify([...state.allUsers, action.payload])
      );
      state.allUsers = JSON.parse(localStorage.getItem("allUsers"));
    },
    storeAllUsers: (state) => {
      state.allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
    },
  },
});

export default userSlice.reducer;
export const { checkAuth, login, logout, signUp, storeAllUsers } =
  userSlice.actions;
