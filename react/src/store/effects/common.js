import { put, takeLatest } from 'redux-saga/effects';

function* test() {
  try {
    yield put({ type: 'common/save', payload: { test: 'test' } });
  } catch (error) {
    console.log(error);
  }
}

export default [
  takeLatest('common/test', test),
];
