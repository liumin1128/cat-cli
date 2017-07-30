import { combineReducers } from 'redux';

import common from './common.js';
import demo from './demo.js';

const reducer = combineReducers({
  common,
  demo,
});

export default reducer;
