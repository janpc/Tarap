import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/elements';

import { List } from '../screens/List';
import { TextDemo, FormDemo, ButtonDemo } from '../screens/Demos';
import Scanner from '../screens/Scanner';
import Product from '../screens/Product';
import { goBackFunction } from './';

const { Navigator, Screen, Group } = createStackNavigator();

export const Main = () => (
  <Navigator screenOptions={{ gestureEnabled: true }}>
    <Group
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Scanner" component={Scanner} />
      <Screen name="Information" component={List} />
      <Screen name="Search" component={TextDemo} />
      <Screen name="Favorites" component={FormDemo} />
      <Screen name="Profile" component={ButtonDemo} />
    </Group>
    <Group
      screenOptions={{
        headerLeft: props => (
          <HeaderBackButton
            {...props}
            onPress={() => {
              goBackFunction();
            }}
          />
        ),
      }}
    >
      <Screen name="Product" component={Product} />
    </Group>
  </Navigator>
);
