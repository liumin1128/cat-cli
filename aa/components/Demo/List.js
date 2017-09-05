import React from 'react';
import { connect } from 'react-redux';
import Waypoint from 'react-waypoint';

import { formatNewsList } from '../../utils/format.js';

import Loading from '../Loading';
import Item from './Item';

function mapStateToProps(state) {
  const { list = [] } = state.demo;
  return {
    list: formatNewsList(list),
  };
}

export default connect(mapStateToProps)(({ list = [], dispatch }) => {
  function loadmore() {
    const length = list.length;
    console.log(length / 20);
    dispatch({
      type: 'demo/loadmore',
      payload: {
        page: parseInt(length / 20, 0) + 1,
      },
    });
  }
  return (<div >
    <div style={{ marginTop: '-20px', minHeight: 50 }}>
      {
      list.map(i => (<div key={i.title}>
        <Item {...i} />
      </div>))
    }
    </div>
    <Waypoint
      onEnter={loadmore}
      onLeave={() => {
        console.log('onLeave');
      }}
    >
      <span><Loading /></span>
    </Waypoint>
  </div>);
});

