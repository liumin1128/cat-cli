import React from 'react';
import {
  BrowserRouter as Router,
  Route, // 这是基本的路由块
  // Link,    // 这是a标签/
  // Switch,   // 这是监听空路由的
  // Redirect, // 这是重定向
  // Prompt,   // 防止转换
} from 'react-router-dom';
import { Provider } from 'react-redux';
import FastClick from 'fastclick';

import './index.less';
import Index from './routes/IndexPage';
import store from './store';

FastClick.attach(document.body);

// 模板，套路
const RouterConfig = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" exact component={Index} />
      </div>
    </Router>
  </Provider>
);

export default RouterConfig;
