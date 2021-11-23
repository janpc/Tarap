import React from 'react';
import { View } from 'react-native';

import {
  TarapTitle,
  TarapSubtitle,
  LoginInput,
  MainButton,
  MainButtonText,
  TitleContainerText,
  LoginContainer,
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

export default Signin;
