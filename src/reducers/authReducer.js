import * as types from "../actions/types";
import { history } from "../index";

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  tokenExpired: false,
  signUpError: {},
  loginError: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_USER_REQUESTED:
      return {
        ...state,
        isFetching: true,
        loginError: {}
      };
    case types.LOGIN_USER_SUCCEEDED:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        tokenExpired: false
      };
    case types.LOGIN_USER_FAILED:
      return {
        ...state,
        isFetching: false,
        loginError: payload
      };
    case types.LOG_OUT:
      localStorage.removeItem("jwtToken");
      history.push("/");
      return {
        ...state,
        isFetching: false,
        loginError: {},
        signUpError: {},
        isAuthenticated: false
      };
    case types.SIGNUP_USER_REQUESTED:
      return {
        ...state,
        isFetching: true,
        signUpError: {}
      };
    case types.SIGNUP_USER_SUCCEEDED:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        tokenExpired: false
      };
    case types.SIGNUP_USER_FAILED:
      return {
        ...state,
        isFetching: false,
        signUpError: payload
      };
    case types.USER_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true
      };
    case types.TOKEN_EXPIRED:
      localStorage.removeItem("jwtToken");
      history.push("/");
      return {
        ...state,
        isAuthenticated: false,
        tokenExpired: true
      };
    case types.FETCH_POLLS_SUCCEEDED:
      return {
        ...state,
        isAuthenticated: true
      };
    case types.CLEAR_ERRORS:
      return {
        ...state,
        signUpError: {},
        loginError: {}
      };
    default:
      return state;
  }
};
