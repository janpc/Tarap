import React from 'react';
import { Text } from 'react-native';
import { withRouter } from 'react-router-native';

import { TabBarContainer, Tab, SvgContainer } from './styles';
import {
  InformateIcon,
  SearchIcon,
  ScannerIcon,
  FavoritesIcon,
  ProfileIcon,
} from '../../icons';

export default TabBar = withRouter(({ history }) => {
  console.log(history);
  const goTo = route => history.push(`/${route}`);
  return (
    <TabBarContainer>
      <Tab onPress={() => goTo('information')}>
        <SvgContainer>
          <InformateIcon color="#394D55" />
        </SvgContainer>
        <Text>inFórmate</Text>
      </Tab>
      <Tab onPress={() => goTo('search')}>
        <SvgContainer>
          <SearchIcon color="#394D55" />
        </SvgContainer>
        <Text>buscar</Text>
      </Tab>
      <Tab onPress={() => goTo('scanner')}>
        <SvgContainer>
          <ScannerIcon color="#394D55" />
        </SvgContainer>
        <Text>escanear</Text>
      </Tab>
      <Tab onPress={() => goTo('favorites')}>
        <SvgContainer>
          <FavoritesIcon color="#394D55" />
        </SvgContainer>
        <Text>favoritos</Text>
      </Tab>
      <Tab onPress={() => goTo('profile')}>
        <SvgContainer>
          <ProfileIcon color="#394D55" />
        </SvgContainer>
        <Text>perfil</Text>
      </Tab>
    </TabBarContainer>
  );
});
