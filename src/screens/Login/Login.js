import React from 'react';
import { View, Text } from 'react-native';

import {
  TarapTitle,
  TarapSubtitle,
  LoginInput,
  MainButton,
  MainButtonText,
  TitleContainerText,
  LoginContainer,
  TopButton,
  TopButtonText,
} from '../../styles/formStyles';

const Login = ({ navigation }) => {
  return (
    <LoginContainer>
      <TitleContainerText>
        <TopButton onPress={() => navigation.goBack()}>
          <TopButtonText>Inicio</TopButtonText>
        </TopButton>
        <TarapTitle>tarap</TarapTitle>
        <TarapSubtitle>
          {`¡ Compra consciente, cuida el medioambiente !`}
        </TarapSubtitle>
      </TitleContainerText>
      <View>
        <LoginInput
          placeholder="Email"
          onChangeText={text => console.log(text)}
          /* defaultValue={} */
        />
        <LoginInput
          placeholder="Contaseña"
          onChangeText={text => console.log(text)}
          /* defaultValue={} */
          secureTextEntry={true}
        />
      </View>
      <View>
        <MainButton>
          <MainButtonText>Iniciar sesión</MainButtonText>
        </MainButton>
      </View>
      <View></View>
    </LoginContainer>
  );
};

export default Login;
