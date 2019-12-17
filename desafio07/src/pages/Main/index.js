import React from 'react';
import { View } from 'react-native';

import Header from './../../components/Header';

import Routes from './../../routes';

import { Container, Wrapper } from './style';

function Main() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Routes />
      </Wrapper>
    </Container>
  );
}

export default Main;
