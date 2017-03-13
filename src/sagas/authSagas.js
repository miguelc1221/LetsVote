import { call, put, takeEvery } from "redux-saga/effects";
import { login, signup } from "../utils/Api";
import * as types from "../actions/types";

function* loginUser(action) {
  try {
    const user = yield call(login, action.payload);
    yield put({ type: types.LOGIN_USER_SUCCEEDED, payload: user });
  } catch (err) {
    yield put({ type: types.LOGIN_USER_FAILED, payload: err.response.data });
  }
}

function* watchLoginUser() {
  yield takeEvery(types.LOGIN_USER_REQUESTED, loginUser);
}

function* signupUser(action) {
  try {
    const user = yield call(signup, action.payload);
    yield put({ type: types.SIGNUP_USER_SUCCEEDED, payload: user });
  } catch (err) {
    yield put({
      type: types.SIGNUP_USER_FAILED,
      payload: err.response.data.errors
    });
  }
}

function* watchSignupUser() {
  yield takeEvery(types.SIGNUP_USER_REQUESTED, signupUser);
}

export default [watchLoginUser, watchSignupUser];
