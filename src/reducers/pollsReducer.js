import * as types from "../actions/types";

const initialState = {
  polls: [],
  isLoadingPolls: false,
  error: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_USER_SUCCEEDED:
      return {
        ...state,
        polls: payload
      };
    case types.FETCH_POLLS_REQUESTED:
      return {
        ...state,
        isLoadingPolls: true
      };
    case types.FETCH_POLLS_SUCCEEDED:
      return {
        ...state,
        polls: payload,
        isLoadingPolls: false
      };
    case types.FETCH_POLLS_FAILED:
      return {
        ...state,
        error: payload,
        isLoadingPolls: false
      };
    case types.SAVE_USER_POLL_REQUESTED:
      return {
        ...state,
        isLoadingPolls: true
      };
    case types.SAVE_USER_POLL_SUCCEEDED:
      return {
        ...state,
        polls: [...state.polls, payload],
        isLoadingPolls: false
      };
    case types.SAVE_USER_POLL_FAILED:
      return {
        ...state,
        error: payload,
        isLoadingPolls: false
      };
    case types.LOG_OUT:
      return {
        ...state,
        polls: []
      };
    default:
      return state;
  }
};
