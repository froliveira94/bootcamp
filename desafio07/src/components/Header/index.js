import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../../NavigationService';

import Logo from './../Icons/Logo';

import {
  Container,
  CartContainer,
  LogoContainer,
  Notification,
  NotificationText,
} from './style';

function Header({ cartSize }) {
  return (
    <Container>
      <LogoContainer onPress={() => NavigationService.navigate('Home')}>
        <Logo />
      </LogoContainer>
      <CartContainer onPress={() => NavigationService.navigate('Cart')}>
        <Notification>
          <NotificationText>{cartSize}</NotificationText>
        </Notification>
        <Icon name="shopping-basket" size={30} color="#fff" />
      </CartContainer>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
