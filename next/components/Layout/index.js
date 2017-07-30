import React from 'react';
import Container from './Container';
import Main from './Main';
import Sider from './Sider';
import Head from './Head';
import Header from '../Header';

export default ({ children }) => (<div>
  <Head />
  <Header />
  <Container>
    <Main>{ children }</Main>
    <Sider><h1>Sider</h1></Sider>
  </Container>
</div>);
