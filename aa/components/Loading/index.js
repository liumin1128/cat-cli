import React from 'react';

export default () => (<div className="loading">
  <img className="img" src="../../static/images/loading.svg" alt="" />
  努力加载中...
  <style global jsx>{`
    .loading {
      padding: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.3);
    }
    @keyframes turn {
      from {
        transform: rotateZ(0deg);
      }
      to {
        transform: rotateZ(720deg);
      }
    }
    .img {
      max-width: 12px;
      opacity: 0.3;
      animation: 2s infinite turn;
      margin-right: 10px;
      transition: 1s;
    }
  `}</style>
</div>);
