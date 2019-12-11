import React from 'react';
import { View, Text } from 'react-native';

import Logo from './../Icons/Logo';

import { Container } from './style';

export default function Header() {
  return (
    <Container>
      <Logo />
    </Container>
  );
}
