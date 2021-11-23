import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { Camera } from 'expo-camera';

import { useCustomNavigation, useCustomBackNavigation } from '../../navigation';
import useCustomRatio from '../../hooks/useCustomRatio';
import { HistoryIcon, FlashlightIcon } from '../../icons';
import {
  InformationView,
  CameraView,
  CameraPreview,
  ScannerSquare,
  ButtonsView,
  CustomButton,
} from './styles';

const Scanner = ({ navigation }) => {
  useCustomBackNavigation();
  const { navigate } = useCustomNavigation();

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isTorchOn, setIsTorchOn] = useState(false);

  const { setCamera, ratio, computedRatio, setRatioOnCameraReady } =
    useCustomRatio();

  useEffect(() => {
    async function getCameraStatus() {
      const { status } = await Camera.requestPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    }
    getCameraStatus();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    navigate('Product', { type, code: data });
  };

  if (hasCameraPermission === null) {
    return (
      <InformationView>
        <Text>Waiting for camera permissions</Text>
      </InformationView>
    );
  }

  if (hasCameraPermission === false) {
    return (
      <InformationView>
        <Text>No access to camera</Text>
      </InformationView>
    );
  }

  return (
    <CameraView>
      <ButtonsView>
        <CustomButton left onPress={() => console.log('history')}>
          <HistoryIcon size={48} color="black" />
        </CustomButton>
        <CustomButton right onPress={() => setIsTorchOn(!isTorchOn)}>
          <FlashlightIcon size={48} color="black" />
        </CustomButton>
        <ScannerSquare size={250} />
      </ButtonsView>
      {scanned ? (
        <Button
          title="Tap to Scan Again"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'Scanner' }],
            })
          }
        />
      ) : (
        <CameraPreview
          aspectRatio={1 / computedRatio}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          onCameraReady={setRatioOnCameraReady}
          ratio={ratio}
          flashMode={isTorchOn ? 'torch' : 'off'}
          ref={ref => {
            setCamera(ref);
          }}
        ></CameraPreview>
      )}
    </CameraView>
  );
};

export default Scanner;
