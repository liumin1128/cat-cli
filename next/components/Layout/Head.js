import React from 'react';
import Head from 'next/head';

export default ({
  title = '华人生活网',
  description = '全美最大华人社区',
}) => (
  <Head>
    <meta charSet="UTF-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    <style>{`
        body {
          background-color: #fafbfc;
        }

        a,body {
          color: #292525;
          font-size: 16px;
          font-weight: 400;
          -webkit-font-smoothing: antialiased;
        }


        a {
          text-decoration: none
        }

        body,h1,h2,h3,h4,h5,h6{
          margin: 0;
          padding: 0;
        }

        html {
          font-family: -apple-system, BlinkMacSystemFont, PingFang-SC-Regular, 'Hiragino Sans GB', 'Microsoft Yahei', Arial, sans-serif
        }

      `}</style>


  </Head>
);
