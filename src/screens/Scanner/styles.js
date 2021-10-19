import styled from 'styled-components/native';
import { Camera } from 'expo-camera';

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
