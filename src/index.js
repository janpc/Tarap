import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import { Main } from './navigation/Main';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Main />
    </>
  );
}
