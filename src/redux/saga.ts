import { all } from 'redux-saga/effects';
import accountSaga from './sagas/accountSaga';
import authSaga from './sagas/authSaga';
import socketSaga from './sagas/socketSaga';
import petSaga from './sagas/petSaga';

export default function* rootSaga(): any {
  yield all([authSaga(), accountSaga(), petSaga(), socketSaga()]);
}
