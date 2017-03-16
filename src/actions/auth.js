import * as types from "./types";
import history from "../history";

export const loginUser = user => ({
  type: types.LOGIN_USER_REQUESTED,
  payload: user
});

export const logOut = () => {
  localStorage.removeItem("jwtToken");
  history.push("/");
  return {
    type: types.LOG_OUT
  };
};

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
