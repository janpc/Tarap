import styled from 'styled-components/native';
import colors from '../../../styles/colors';
import { SimpleArrow } from '../../../icons';
import fonts from '../../../styles/fonts';

export const ComponentView = styled.View`
  ${({ last }) => !last && 'margin-bottom: 28px;'}
`;

export const ComponentRow = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 24px;
  align-items: center;
`;
export const ComponentTitle = styled.Text`
  font-family: ${fonts.light};
  font-size: 20px;
  margin-left: 10px;
`;

export const ConatinerBin = styled.Image`
  width: 40px;
  height: 40px;
  margin-left: 10px;
`;

export const ComponentMoreInfo = styled.View`
  flex-direction: row;
  margin-left: 68px;
  align-items: center;
  margin-top: 20px;

  ${({ show }) => !show && 'display: none;'}
`;

export const ComponentArrow = styled(SimpleArrow)`
  ${({ down }) => (down ? 'transform: rotate(90deg);' : '')}
`;
