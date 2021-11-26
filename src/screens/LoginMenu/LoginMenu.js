import React from 'react';
import { View } from 'react-native';

import {
  TarapTitle,
  TarapSubtitle,
  MainButton,
  MainButtonText,
  TitleContainerText,
  LoginContainer,
} from '../../styles/formStyles';

const LoginMenu = ({ navigation }) => {
  return (
    <LoginContainer>
      <TitleContainerText>
        <TarapTitle>tarap</TarapTitle>
        <TarapSubtitle>
          {`¡ Compra consciente, cuida el medioambiente !`}
        </TarapSubtitle>
      </TitleContainerText>
      <View>
        <MainButton onPress={() => navigation.navigate('Login')}>
          <MainButtonText>Nuevo usuario</MainButtonText>
        </MainButton>
        <MainButton onPress={() => navigation.navigate('Signin')} dark>
          <MainButtonText>Iniciar sesión</MainButtonText>
        </MainButton>
      </View>
      <View></View>
    </LoginContainer>
  );
};

export default LoginMenu;
