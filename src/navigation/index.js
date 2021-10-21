import React, { useState, useEffect } from 'react';
import { createNavigationContainerRef } from '@react-navigation/native';
import { BackHandler } from 'react-native';

export const navigationRef = createNavigationContainerRef();

// You can export navigation functions to use throughout your app, without accessing the `navigation` prop.
export function useCustomNavigation() {
  const [currentPage, setCurrentPage] = useState('Scanner');

  function navigate(name, params) {
    if (name === 'Scanner') {
      navigationRef.reset({
        index: 0,
        routes: [{ name }],
      });
    } else {
      navigationRef?.navigate(name, params);
    }

    setCurrentPage(name);
  }

  return { navigate, currentPage };
}

export function goBackFunction() {
  const history = navigationRef.getState().routes;
  const pageBefore = history[history.length - 2];

  if (pageBefore?.name === 'Scanner') {
    navigationRef.reset({
      index: 0,
      routes: [...history.slice(0, -2), { name: 'Scanner' }],
    });
  } else {
    navigationRef.goBack();
  }
}

export function useCustomBackNavigation() {
  useEffect(() => {
    console.log('a');
    const unsubscribe = navigationRef.current.addListener('beforeRemove', e => {
      e.preventDefault();
      console.log(navigationRef);
      unsubscribe();
    });
    const backAction = () => {
      const history = navigationRef.getState().routes;
      const pageBefore = history[history.length - 2];
      console.log(navigationRef);
      if (pageBefore?.name === 'Scanner') {
        navigationRef.reset({
          index: 0,
          routes: [...history.slice(0, -2), { name: 'Scanner' }],
        });
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [navigationRef]);
}
