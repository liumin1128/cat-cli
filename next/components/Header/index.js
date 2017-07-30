import React, { Component } from 'react';
import Headroom from 'react-headroom';
import Link from 'next/link';
import Menu from './Menu';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'black',
    };
    this.back = () => {
    };
  }
  componentDidMount() {
  }
  render() {
    const { theme } = this.state;
    return (<Headroom
      style={{
        height: 60,
      }}
      onUnpin={() => {
        this.setState({
          theme: 'white',
        });
      }}
      onUnfix={() => {
        this.setState({
          theme: 'black',
        });
      }}
    >
      <div className={`header ${theme}`}>
        <div className="container wrap" >
          <Link prefetch href="/">
            <div className="logo">
              <img src="../../static/images/logo.jpeg" alt="" className="logo" />
              <h1>华人生活网</h1>
            </div>
          </Link>
          <div className="tools">
            <Menu>
              <img className="tool" src="../../static/images/menu.svg" alt="" />
            </Menu>
            <a href="">登录</a>
          </div>
        </div>
        <style jsx>{`
        .header {
          border-bottom: 1px solid #DBE2E8;
          margin-bottom: 16px;
          height: 60px;
          transition: 0.3s;
        }
        .header .wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 12px;
        }
        .logo {
          height: 60px;
          display: flex;
          align-items: center;
        }
        .logo img {
          max-width: 36px;
          max-height: 36px;
          border-radius: 200px;
          margin-right: 16px;
        }
        .logo h1 {
          display: none;
          font-size: 20px;
          color: #fff;
        }

        .tools {
          display: flex;
          align-items: center;
        }
        .tools .tool {
          width: 25px;
          height: 25px;
          opacity: 0.7;
          margin-right: 16px;
        }
        .tools a {
          border: 1px #fff solid;
          padding: 7px 24px;
          border-radius: 100px;
          // margin-right: 16px;
        }

        .black {
          background: #1b1b1f;
          border: none;
        }
        .tools a {
          color: #fff;
        }
        .tools a:hover {
          color: #1b1b1f;
          background: #fff;
        }

        .white {
          background: #fff;
        }
        .white a {
          color: #000;
        }
        .white a:hover {
          color: #fff;
          background: #1b1b1f;
        }
        @media (max-width: 768px){
          .box {
            padding: 0 16px;
          }
          .tools .tool {
            width: 18px;
            height: 18px;
          }
          .tools a {
            border:none;
            padding: 14px;
          }
        }
      `}</style>
      </div></Headroom>);
  }
}

export default Header;
