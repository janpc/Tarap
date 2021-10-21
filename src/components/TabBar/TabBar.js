import React from 'react';
import { Text } from 'react-native';

import { useCustomNavigation } from '../../navigation';

import { TabBarContainer, Tab, SvgContainer } from './styles';
import {
  InformateIcon,
  SearchIcon,
  ScannerIcon,
  FavoritesIcon,
  ProfileIcon,
} from '../../icons';

export default function TabBar() {
  const { navigate, currentPage } = useCustomNavigation();

  const Tab = ({ name, screenName, Icon }) =>
    TabBarCell({ name, screenName, Icon, currentPage, navigate });

  return (
    <TabBarContainer>
      <Tab name="inFórmate" screenName="Information" Icon={InformateIcon} />
      <Tab name="buscar" screenName="Search" Icon={SearchIcon} />
      <Tab name="escanear" screenName="Scanner" Icon={ScannerIcon} />
      <Tab name="favoritos" screenName="Favorites" Icon={FavoritesIcon} />
      <Tab name="perfil" screenName="Profile" Icon={ProfileIcon} />
    </TabBarContainer>
  );
}

const TabBarCell = ({ name, screenName, Icon, currentPage, navigate }) => {
  return (
    <Tab
      onPress={() => navigate(screenName)}
      isCurrentPage={currentPage === screenName}
    >
      <SvgContainer>
        <Icon color="#394D55" />
      </SvgContainer>
      <Text>{name}</Text>
    </Tab>
  );
};
