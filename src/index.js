import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { Main } from './navigation/Main';
import TabBar from './components/TabBar';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Main />
        <TabBar />
      </NavigationContainer>
    </>
  );
}
