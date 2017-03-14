import * as types from "./types";

export const fetchPolls = () => ({
  type: types.FETCH_POLLS_REQUESTED
});

export const fetchSinglePoll = id => ({
  type: types.FETCH_SINGLE_POLL_REQUESTED,
  payload: id
});

export const editPoll = poll => ({
  type: types.EDIT_USER_POLL_REQUESTED,
  payload: poll
});

export const savePoll = poll => ({
  type: types.SAVE_USER_POLL_REQUESTED,
  payload: poll
});

export const deletePoll = id => ({
  type: types.DELETE_USER_POLL_REQUESTED,
  payload: id
});

export const filterDeletedPoll = poll => ({
  type: types.FILTER_DELETED_POLL,
  payload: poll
});
