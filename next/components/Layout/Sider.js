import React from 'react';

export default ({ children }) => (
  <div className="side">
    {children}
    <style jsx>{`
      .side{
        width: 300px;
        min-height: 500px;
        background: rgba(0,0,0,0.1);
      }
    `}</style>
  </div>
);

