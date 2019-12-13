import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Logo from './../Icons/Logo';

import { Container, CartContainer, LogoContainer } from './style';

export default function Header() {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <CartContainer>
        <Icon name="shopping-basket" size={30} color="#fff" />
      </CartContainer>
    </Container>
  );
}
