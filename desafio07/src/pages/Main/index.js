import React from 'react';
import { View, Text } from 'react-native';

import Header from './../../components/Header';

import { Container } from './style';

export default function Main() {
  return (
    <Container>
      <Header />
      <Text>Main</Text>
    </Container>
  );
}
