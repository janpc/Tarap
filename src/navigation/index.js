import React, { useState, useEffect, useReducer } from 'react';
import { createNavigationContainerRef } from '@react-navigation/native';
import { BackHandler } from 'react-native';

import { useNavigationContext } from './context';

export const navigationRef = createNavigationContainerRef();

export function useCustomNavigation() {
  const { setCurrentPage } = useNavigationContext();

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

  return { navigate };
}

export function useGoBackFunction() {
  const { setCurrentPage } = useNavigationContext();

  function goBack() {
    const history = navigationRef.getState().routes;
    const pageBefore = history[history.length - 2];

    setCurrentPage(pageBefore.name);

    if (pageBefore?.name === 'Scanner') {
      navigationRef.reset({
        index: 0,
        routes: [...history.slice(0, -2), { name: 'Scanner' }],
      });
    } else {
      navigationRef.goBack();
    }
  }
  return { goBack };
}

export function useCustomBackNavigation() {
  const { setCurrentPage } = useNavigationContext();

  useEffect(() => {
    const backAction = () => {
      const history = navigationRef.getState().routes;
      const pageBefore = history[history.length - 2];

      setCurrentPage(pageBefore.name);

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

export { useNavigationContext };
