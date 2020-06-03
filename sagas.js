import { all, call, delay, put, takeEvery } from 'redux-saga/effects'

import {
  retailToMailFlow
} from './retailToMail/redux/actions/index';

export function* helloSaga() {
  console.log('Hello Saga!');
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    call(helloSaga),
    // call(retailToMailFlow),
  ])
}
