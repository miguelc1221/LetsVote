import * as types from "./types";

export const loginUser = user => ({
  type: types.LOGIN_USER_REQUESTED,
  payload: user
});

export const logOut = () => ({
  type: types.LOG_OUT
});

export const signupUser = user => ({
  type: types.SIGNUP_USER_REQUESTED,
  payload: user
});

export const userAuthenticated = user => ({
  type: types.USER_AUTHENTICATED
});

export const clearErrors = () => ({
  type: types.CLEAR_ERRORS
});
