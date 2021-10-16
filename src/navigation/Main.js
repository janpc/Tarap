import React from 'react';
import { NativeRouter, Route, BackButton } from 'react-router-native';

import { List } from '../screens/List';
import { TextDemo, FormDemo, ButtonDemo } from '../screens/Demos';
import Scanner from '../screens/Scanner';
import Product from '../screens/Product';
import TabBar from '../components/TabBar';

export const Main = () => (
  <NativeRouter>
    <BackButton>
      <Route exact path="/scanner" component={Scanner} />
      <Route exact path="/information" component={List} />
      <Route exact path="/search" component={TextDemo} />
      <Route exact path="/favorites" component={FormDemo} />
      <Route exact path="/profile" component={ButtonDemo} />
      <Route exact path="/product" component={Product} />

      <TabBar />
    </BackButton>
  </NativeRouter>
);
