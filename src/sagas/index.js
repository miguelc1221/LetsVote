import { fork } from 'redux-saga/effects';
import authSaga from './authSagas';
import pollsSagas from './pollsSagas';

const sagas = [
  ...authSaga,
  ...pollsSagas
];

export default function* root() {
  yield sagas.map(saga => fork(saga));
}