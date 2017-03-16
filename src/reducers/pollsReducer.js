import * as types from "../actions/types";

const initialState = {
  polls: [],
  votingPoll: {},
  isLoadingPolls: false,
  isSavingPolls: false,
  isVoting: false,
  pollError: {}
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
    case types.FETCH_SINGLE_POLL_REQUESTED:
      return {
        ...state,
        isLoadingPolls: true
      };
    case types.FETCH_SINGLE_POLL_SUCCEEDED:
      return {
        ...state,
        isLoadingPolls: false,
        votingPoll: payload,
        pollError: {}
      };
    case types.FETCH_SINGLE_POLL_FAILED:
      return {
        ...state,
        isLoadingPolls: false,
        pollError: payload
      };
    case types.FETCH_POLLS_FAILED:
      return {
        ...state,
        pollError: payload,
        isLoadingPolls: false
      };
    case types.SAVE_USER_POLL_REQUESTED:
      return {
        ...state,
        isSavingPolls: true
      };
    case types.SAVE_USER_POLL_SUCCEEDED:
      return {
        ...state,
        polls: [...state.polls, payload],
        isSavingPolls: false
      };
    case types.SAVE_USER_POLL_FAILED:
      return {
        ...state,
        pollError: payload,
        isSavingPolls: false
      };
    case types.EDIT_USER_POLL_REQUESTED:
      return {
        ...state,
        isVoting: true
      };
    case types.EDIT_USER_POLL_SUCCEEDED:
      return {
        ...state,
        votingPoll: payload,
        isVoting: false
      };
    case types.EDIT_USER_POLL_FAILED:
      return {
        ...state,
        pollError: payload,
        isVoting: false
      };
    case types.FILTER_DELETED_POLL:
      return {
        ...state,
        polls: state.polls.filter(val => val._id !== payload._id)
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
