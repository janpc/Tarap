import React, { useState } from 'react';
import { View } from 'react-native';

import { signinWithEmail, signinWithGoogle } from '../../firebase/auth';

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
  Link,
  LinkText,
} from '../../styles/formStyles';

const Signin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleEmailSignin() {
    const user = await signinWithEmail(email, password);
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
        <Link>
          <LinkText>Recuperar contraseña</LinkText>
        </Link>
        <MainButton onPress={handleEmailSignin}>
          <MainButtonText>Iniciar sesión</MainButtonText>
        </MainButton>
      </View>
      <View>
        <MainButton onPress={signinWithGoogle} dark>
          <GoogleIcon />
          <MainButtonText gap>Entrar con Google</MainButtonText>
        </MainButton>
        <MainButton dark>
          <AppleIcon />
          <MainButtonText gap>Entrar con Apple</MainButtonText>
        </MainButton>
      </View>
    </LoginContainer>
  );
};

export default Signin;
