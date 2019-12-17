import React from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import Routes from './routes';
import NavigationService from './NavigationService';

import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import store from './store';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store}>
          <Routes ref={nav => NavigationService.setNavigatorRef(nav)} />
        </Provider>
      </SafeAreaView>
    </>
  );
}
