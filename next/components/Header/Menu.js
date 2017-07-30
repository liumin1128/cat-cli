import React, { Component } from 'react';
import Modal from 'react-modal';
import { NEWS_CLASS_LIST, FENLEI_CLASS_LIST } from '../../constants/common.js';

function prevent(event) {
  if (event.cancelable) {
        // 判断默认行为是否已经被禁用
    if (!event.defaultPrevented) {
      event.preventDefault();
    }
  }
}

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.tragger = () => {
      this.setState({
        visible: !this.state.visible,
      }, () => {
        document.body.style.height = this.state.visible ? '100%' : 'auto';
        document.body.style.overflow = this.state.visible ? 'hidden' : 'scroll';
        if (this.state.visible) {
          document.addEventListener('touchmove', prevent, false);
        } else {
          document.removeEventListener('touchmove', prevent, false);
        }
      });
    };
  }
  render() {
    const { visible } = this.state;
    const { children } = this.props;
    return (<div>
      <span onClick={this.tragger} className="button">
        {children}
      </span>
      <Modal
        isOpen={visible}
        // onAfterOpen={afterOpenFn}
        onRequestClose={this.tragger}
        // closeTimeoutMS={n}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            zIndex: 1,
          },
          content: {
            position: 'absolute',
            top: '60px',
            left: '0px',
            right: '0px',
            bottom: '0px',
            border: 'none',
            borderRadius: 0,
            // height: '100%',
            // overflow: 'hidden',
            // height: '200px',
            // border: '1px solid #ccc',
            background: '#fff',
            // overflow: 'auto',
            // WebkitOverflowScrolling: 'touch',
            outline: 'none',
            padding: '20px',
          },
        }}
        contentLabel="Modal"
      >
        <div className="classbox">
          <h3>新闻分类</h3>
          <div className="items">
            {NEWS_CLASS_LIST.map(i => <span key={i}>{i}</span>)}
          </div>
        </div>
        <div className="classbox">
          <h3>分类信息</h3>
          <div className="items">
            {FENLEI_CLASS_LIST.map(i => <span key={i}>{i}</span>)}
          </div>
        </div>
      </Modal>
      <style jsx>{`
        .classbox {
          padding: 5%;
          padding-bottom: 0;
        }
        .classbox h3 {
          font-size: 24px;
          font-weight: 100;
          color: #999;
          padding: 16px 0 32px;
          font-size: 12px;
        }
        .classbox .items {
          width: 100%;
        }
        .classbox span {
          display: inline-block;
          width: 75px;
          width: 33.3%;
          text-align: center;
          color: #292525;
          margin-bottom: 24px;
        }
        .button {
          display: flex;
          text-align: center;
          flex-direction: column;
        }

      `}</style>
    </div>);
  }
}

export default Menu;
