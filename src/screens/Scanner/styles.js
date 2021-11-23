import styled from 'styled-components/native';
import { Camera } from 'expo-camera';
import { ScanIcon } from '../../icons';

export const InformationView = styled.View`
  flex: 1;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
export const CameraView = styled.View`
  flex: 1;
  background-color: #000;
  justify-content: center;
`;
export const CameraPreview = styled(Camera)`
  flex: 1;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: black;
  ${({ aspectRatio }) => `aspect-ratio: ${aspectRatio}`};
`;
export const ButtonsView = styled.SafeAreaView`
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 50px;
  top: 0;
  z-index: 10;
`;
export const ScannerSquare = styled(ScanIcon)`
  align-self: center;
  padding-bottom: 90px;
`;

export const CustomButton = styled.TouchableHighlight`
  position: absolute;
  top: 40px;
  background-color: white;
  border-radius: 50px;
  padding: 3px 1px 1px 3px;

  ${({ left }) => left && 'left: 25px;'}
  ${({ right }) => right && 'right: 25px;'}
`;
