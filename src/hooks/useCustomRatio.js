import React, { useState, useEffect } from 'react';

import { Dimensions, Platform } from 'react-native';

export default useCustomRatio = () => {
  const [camera, setCamera] = useState(null);
  const [ratio, setRatio] = useState('4:3'); // default is 4:3
  const [computedRatio, setComputedRatio] = useState(4 / 3);
  const { height, width } = Dimensions.get('window');
  const screenRatio = height / width;
  const [isRatioSet, setIsRatioSet] = useState(false);

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

  const setRatioOnCameraReady = async () => {
    if (!isRatioSet) {
      await prepareRatio();
    }
  };

  return { setCamera, ratio, computedRatio, setRatioOnCameraReady };
};
