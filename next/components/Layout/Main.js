import React from 'react';

export default ({ children }) => (
  <div style={{ maxWidth: 760 }} className="main">
    {children}
    <style global jsx>{`
      .main{
        max-width: 760px;
        margin: 0 auto;
      }
      @media (min-width: 1110px){
        .main{
          box-sizing: border-box;
        }
      }
      @media (min-width: 1110px){
        .main{
          margin: 0 50px 0 0;
        }
      }
    `}</style>
  </div>
);

