import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from '../screens/Signin';
import Login from '../screens/Login';
import LoginMenu from '../screens/LoginMenu/LoginMenu';

const { Navigator, Screen } = createStackNavigator();

export const LoginNavigation = () => {
  return (
    <Navigator screenOptions={{ gestureEnabled: true, headerShown: false }}>
      <Screen name="Login_Menu" component={LoginMenu} />
      <Screen name="Login" component={Login} />
      <Screen name="Signin" component={Signin} />
    </Navigator>
  );
};
