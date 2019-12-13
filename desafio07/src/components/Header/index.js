import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Logo from './../Icons/Logo';

import { Container, CartContainer } from './style';

export default function Header() {
  return (
    <Container>
      <Logo />
      <CartContainer>
        <Icon name="shopping-basket" size={30} color="#fff" />
      </CartContainer>
    </Container>
  );
}
