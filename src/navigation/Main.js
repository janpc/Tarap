import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { List } from '../screens/List';
import { TextDemo, FormDemo, ButtonDemo } from '../screens/Demos';
import Scanner from '../screens/Scanner';
import Product from '../screens/Product';

const { Navigator, Screen } = createStackNavigator();

export const Main = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen
      name="Scanner"
      component={Scanner}
      screenOptions={{ unmountOnBlur: true }}
    />
    <Screen name="Information" component={List} />
    <Screen name="Search" component={TextDemo} />
    <Screen name="Favorites" component={FormDemo} />
    <Screen name="Profile" component={ButtonDemo} />
    <Screen name="Product" component={Product} />
  </Navigator>
);
