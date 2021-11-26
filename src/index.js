import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import useMyFonts from './fonts';

import { navigationRef } from './navigation';
import useAuthState from './firebase/useAuthState';
import { Main } from './navigation/Main';
import { LoginNavigation } from './navigation/LoginNavigation';
import TabBar from './components/TabBar';
import { NavigationContextProvider } from './navigation/context';

export default function App() {
  const [areFontsReady, error] = useMyFonts();

  const { isLogged, user } = useAuthState();

  return areFontsReady ? (
    <>
      <StatusBar style="auto" />
      <NavigationContainer ref={navigationRef}>
        <NavigationContextProvider>
          {isLogged ? (
            <>
              <Main />
              <TabBar />
            </>
          ) : (
            <LoginNavigation />
          )}
        </NavigationContextProvider>
      </NavigationContainer>
    </>
  ) : (
    <></>
  );
}
