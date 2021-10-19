import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { TabBarContainer, Tab, SvgContainer } from './styles';
import {
  InformateIcon,
  SearchIcon,
  ScannerIcon,
  FavoritesIcon,
  ProfileIcon,
} from '../../icons';

export default function TabBar() {
  const navigation = useNavigation();
  const goTo = route =>
    navigation.reset({
      index: 0,
      routes: [{ name: route }],
    });

  console.log(goTo);
  return (
    <TabBarContainer>
      <Tab onPress={() => goTo('Information')}>
        <SvgContainer>
          <InformateIcon color="#394D55" />
        </SvgContainer>
        <Text>inFórmate</Text>
      </Tab>
      <Tab onPress={() => goTo('Search')}>
        <SvgContainer>
          <SearchIcon color="#394D55" />
        </SvgContainer>
        <Text>buscar</Text>
      </Tab>
      <Tab onPress={() => goTo('Scanner')}>
        <SvgContainer>
          <ScannerIcon color="#394D55" />
        </SvgContainer>
        <Text>escanear</Text>
      </Tab>
      <Tab onPress={() => goTo('Favorites')}>
        <SvgContainer>
          <FavoritesIcon color="#394D55" />
        </SvgContainer>
        <Text>favoritos</Text>
      </Tab>
      <Tab onPress={() => goTo('Profile')}>
        <SvgContainer>
          <ProfileIcon color="#394D55" />
        </SvgContainer>
        <Text>perfil</Text>
      </Tab>
    </TabBarContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    backgroundColor: 'white',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
});
