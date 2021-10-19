import React, { useState, useEffect } from 'react';
import { Text, Button } from 'react-native';
import { Camera } from 'expo-camera';

import useCustomRatio from '../../hooks/useCustomRatio';
import { ScanIcon } from '../../icons';
import { InformationView, CameraView, CameraPreview } from './styles';

const Scanner = ({ navigation }) => {
  const { navigate } = navigation;

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

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
          ref={ref => {
            setCamera(ref);
          }}
        >
          <ScanIcon size={250} style={{ flex: 1 }} />
        </CameraPreview>
      )}
    </CameraView>
  );
};

export default Scanner;
