import * as types from './types';

// export const fetchPolls = (user) => ({
//   type: types.LOGIN_USER_REQUESTED,
//   payload: user
// })

export const savePoll = (poll) => ({
  type: types.SAVE_USER_POLL_REQUESTED,
  payload: poll
})
