import React from 'react';
import { View } from 'react-native';

import { GoogleIcon, AppleIcon } from '../../icons';

import {
  TarapTitle,
  TarapSubtitle,
  LoginInput,
  MainButton,
  MainButtonText,
  TitleContainerText,
  LoginContainer,
  Link,
  LinkText,
} from '../../styles/formStyles';

const Signin = () => {
  return (
    <LoginContainer>
      <TitleContainerText>
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
        <Link>
          <LinkText>Recuperar contraseña</LinkText>
        </Link>
        <MainButton>
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

export default Signin;
