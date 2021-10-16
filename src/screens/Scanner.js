import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Platform,
  Button,
} from 'react-native';
import { Camera } from 'expo-camera';
import { withRouter } from 'react-router-native';

import { ScanIcon } from '../icons';

const Scanner = withRouter(({ history }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);

  const [ratio, setRatio] = useState('4:3'); // default is 4:3
  const [computedRatio, setComputedRatio] = useState(4 / 3);
  const { height, width } = Dimensions.get('window');
  const screenRatio = height / width;
  const [isRatioSet, setIsRatioSet] = useState(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    async function getCameraStatus() {
      const { status } = await Camera.requestPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    }
    getCameraStatus();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    history.push({
      pathname: '/product',
      state: { type, code: data },
    });
  };

  const prepareRatio = async () => {
    if (Platform.OS === 'android') {
      const ratios = await camera.getSupportedRatiosAsync();
      const distances = {};
      let minDistance = null;
      ratios.forEach(r => {
        const parts = r.split(':');
        const realRatio = parseInt(parts[0], 10) / parseInt(parts[1], 10);
        const distance = Math.abs(screenRatio - realRatio);
        distances[r] = distance;
        if (minDistance == null || distance < distances[minDistance]) {
          minDistance = r;
          setComputedRatio(realRatio);
        }
      });
      setRatio(minDistance);
      setIsRatioSet(true);
    }
  };

  const setCameraReady = async () => {
    if (!isRatioSet) {
      await prepareRatio();
    }
  };

  if (hasCameraPermission === null) {
    return (
      <View style={styles.information}>
        <Text>Waiting for camera permissions</Text>
      </View>
    );
  }

  if (hasCameraPermission === false) {
    return (
      <View style={styles.information}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {scanned ? (
        <Button title="Tap to Scan Again" onPress={() => setScanned(false)} />
      ) : (
        <Camera
          style={[
            styles.cameraPreview,
            {
              aspectRatio: 1 / computedRatio,
            },
          ]}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          onCameraReady={setCameraReady}
          ratio={ratio}
          ref={ref => {
            setCamera(ref);
          }}
        >
          <ScanIcon size={250} style={{ flex: 1 }} />
        </Camera>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  information: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  cameraPreview: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});

export default Scanner;
