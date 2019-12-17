import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

const ContentStack = createStackNavigator(
  {
    Home,
    Cart,
  },
  {
    defaultNavigationOptions: {
      header: () => <Header />,
    },
  }
);

const AppContainer = createAppContainer(ContentStack);

export default AppContainer;
