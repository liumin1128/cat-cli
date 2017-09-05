import React, { Component } from 'react';
import Router from 'next/router';
import Head from '../components/Layout/Head';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    Router.prefetch('/');
    setTimeout(() => {
      Router.push({
        pathname: '/',
      });
    }, 2000);
  }
  render() {
    return (<div>
      <Head />
      <p className="errorInfo">诶呀，这个页面找不到了。。。</p>
      <style jsx>{`
        .errorInfo {
          text-align: center;
        }
      `}</style>

    </div>);
  }
}

export default Detail;
