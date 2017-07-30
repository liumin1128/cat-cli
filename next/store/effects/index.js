import { all, call, select, put, takeLatest } from 'redux-saga/effects';
import { DEMO_API } from '../../constants/api.js';
import request from '../../utils/fetch.js';

function* getdemoInit() {
  const { demo } = yield select();
  const list = demo.list;
  if (list.length === 0) {
    console.log('没有list存在，判断为第一次渲染');
    const data = yield call(request, `${DEMO_API + 1}`);
    yield put({ type: 'demo/save', payload: { list: data.showapi_res_body.contentlist } });
  } else {
    console.log('list存在，不再加载');
  }
}

function* getdemoList({ payload }) {
  const { demo } = yield select();
  const list = demo.list;
  const data = yield call(request, `${DEMO_API + payload.page}`);
  yield put({ type: 'demo/save', payload: { list: list.concat(data.showapi_res_body.contentlist) } });
}

function * rootSaga() {
  yield all([
    takeLatest('demo/loadmore', getdemoList),
    takeLatest('demo/init', getdemoInit),
  ]);
}

export default rootSaga;
