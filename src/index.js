import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { navigationRef } from './navigation';
import { Main } from './navigation/Main';
import TabBar from './components/TabBar';
import { NavigationContextProvider } from './navigation/context';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer ref={navigationRef}>
        <NavigationContextProvider>
          <Main />
          <TabBar />
        </NavigationContextProvider>
      </NavigationContainer>
    </>
  );
}
