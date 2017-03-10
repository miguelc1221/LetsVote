import * as types from '../actions/types';

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  user: {},
  signUpError: {},
  loginError: {},
}

export default (state=initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_USER_REQUESTED:
      return {
        ...state,
        isFetching: true,
        loginError: {}
      }
    case types.LOGIN_USER_SUCCEEDED:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: payload
      }
    case types.LOGIN_USER_FAILED:
      return {
        ...state,
        isFetching: false,
        loginError: payload
      }
    case types.LOG_OUT:
      return {
        ...state,
        isFetching: false,
        loginError: {},
        signUpError: {},
        isAuthenticated: false,
        user: {}
      }
    case types.SIGNUP_USER_REQUESTED:
      return {
        ...state,
        isFetching: true,
        signUpError: {}
      }
    case types.SIGNUP_USER_SUCCEEDED:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
      }
    case types.SIGNUP_USER_FAILED:
      return {
        ...state,
        isFetching: false,
        signUpError: payload
      }
    case types.CLEAR_ERRORS:
      return {
        ...state,
        signUpError: {},
        loginError: {}
      }
    default:
      return state
  }
}