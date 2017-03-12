import * as types from "./types";

export const fetchPolls = () => ({
  type: types.FETCH_POLLS_REQUESTED
});

export const savePoll = poll => ({
  type: types.SAVE_USER_POLL_REQUESTED,
  payload: poll
});
