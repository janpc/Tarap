import { color } from 'react-native-reanimated';
import styled from 'styled-components/native';
import colors from './colors';

export const TarapTitle = styled.Text`
  font-family: Neutra Text TF;
  font-style: normal;
  font-weight: 500;
  font-size: 122px;
  color: ${colors.main};
  text-align: center;
`;

export const TarapSubtitle = styled.Text`
  font-family: Neutra Text Light;
  font-style: normal;
  font-weight: 300;
  font-size: 26px;

  text-align: center;
  align-self: center;

  max-width: 300px;
  margin-top: 15px;
`;

export const LoginInput = styled.TextInput`
  width: 80%;
  background: ${colors.inputBackground};

  color: ${colors.dark};

  font-family: Neutra Text TF;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 19px;

  padding: 10px 20px;
  align-self: center;

  margin-top: 15px;
`;

export const MainButton = styled.TouchableOpacity`
  width: 90%;
  height: 44px;

  background: ${({ dark }) => (dark ? colors.secondary : colors.main)};
  border-radius: 20px;

  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: row;

  margin-top: 20px;
`;

export const MainButtonText = styled.Text`
  font-family: Neutra Text TF;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 21px;

  color: #ffffff;

  ${({ gap }) => gap && 'margin-left:10px;'}
`;

export const TitleContainerText = styled.View`
  justify-content: flex-end;
`;

export const LoginContainer = styled.SafeAreaView`
  justify-content: space-between;
  height: 100%;

  padding: 20% 0;
`;

export const Link = styled.TouchableOpacity`
  width: 80%;

  background: transparent;

  justify-content: flex-end;
  align-self: center;
  flex-direction: row;
`;

export const LinkText = styled.Text`
  padding: 5px;

  text-decoration: underline;
`;
