import React from 'react';
import { withReduxSaga } from '../store';

import Layout from '../components/Layout/index.js';
import DemoList from '../components/Demo/List';

const Index = () => <Layout><DemoList /></Layout>;

Index.getInitialProps = async ({ store }) => {
  store.dispatch({
    type: 'demo/init',
  });
};

export default withReduxSaga(Index);
