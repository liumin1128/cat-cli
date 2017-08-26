import { all } from 'redux-saga/effects';
import common from './common.js';

function * rootSaga() {
  yield all([
    ...common,
  ]);
}

export default rootSaga;
