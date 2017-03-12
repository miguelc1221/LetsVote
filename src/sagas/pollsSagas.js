import { call, put, takeEvery } from "redux-saga/effects";
import { getPolls, editPoll, savePoll, deletePoll } from "../utils/Api";
import * as types from "../actions/types";

// GET POLLS
function* fetchPolls() {
  try {
    const polls = yield call(getPolls);
    yield put({ type: types.FETCH_POLLS_SUCCEEDED, payload: polls });
  } catch (err) {
    yield put({ type: types.TOKEN_EXPIRED });
    yield put({ type: types.FETCH_POLLS_FAILED, payload: err.response.data });
  }
}

function* watchFetchPolls() {
  yield takeEvery(types.FETCH_POLLS_REQUESTED, fetchPolls);
}

// SAVE POLLS
function* saveUserPoll(action) {
  try {
    const poll = yield call(savePoll, action.payload);
    yield put({ type: types.SAVE_USER_POLL_SUCCEEDED, payload: poll });
  } catch (err) {
    yield put({ type: types.TOKEN_EXPIRED });
    yield put({
      type: types.SAVE_USER_POLL_FAILED,
      payload: err.response.data.errors
    });
  }
}

function* watchSaveUserPoll() {
  yield takeEvery(types.SAVE_USER_POLL_REQUESTED, saveUserPoll);
}

// EDIT POLL
function* editUserPoll(action) {
  try {
    const poll = yield call(editPoll, action.payload);
    yield put({ type: types.EDIT_USER_POLL_SUCCEEDED, payload: poll });
  } catch (err) {
    yield put({
      type: types.EDIT_USER_POLL_FAILED,
      payload: err.response.data.errors
    });
  }
}

function* watchEditUserPoll() {
  yield takeEvery(types.EDIT_USER_POLL_REQUESTED, editUserPoll);
}

// DELETE POLLS
function* deleteUserPoll(action) {
  try {
    const poll = yield call(deletePoll, action.payload);
    yield put({ type: types.DELETE_USER_POLL_SUCCEEDED, payload: poll });
  } catch (err) {
    yield put({ type: types.TOKEN_EXPIRED });
    yield put({
      type: types.DELETE_USER_POLL_FAILED,
      payload: err.response.data.errors
    });
  }
}

function* watchDeleteUserPoll() {
  yield takeEvery(types.DELETE_USER_POLL_REQUESTED, deleteUserPoll);
}

export default [
  watchFetchPolls,
  watchSaveUserPoll,
  watchEditUserPoll,
  watchDeleteUserPoll
];
