import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { loginWithEmail } from '../../firebase/auth';

import { GoogleIcon, AppleIcon } from '../../icons/';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleEmailLogin() {
    const user = await loginWithEmail(email, password);
    console.log(user);
  }
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
          onChangeText={text => setEmail(text)}
          defaultValue={email}
        />
        <LoginInput
          placeholder="Contaseña"
          onChangeText={text => setPassword(text)}
          defaultValue={password}
          secureTextEntry={true}
        />
        <MainButton onPress={handleEmailLogin}>
          <MainButtonText>Regístrate con correo</MainButtonText>
        </MainButton>
      </View>
      <View>
        <MainButton dark>
          <GoogleIcon />
          <MainButtonText gap>Resgístrate con Google</MainButtonText>
        </MainButton>
        <MainButton dark>
          <AppleIcon />
          <MainButtonText gap>Resgístrate con Apple</MainButtonText>
        </MainButton>
      </View>
    </LoginContainer>
  );
};

export default Login;
