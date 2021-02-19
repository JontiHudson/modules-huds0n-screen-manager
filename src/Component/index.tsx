import React from 'react';
import { View } from 'react-native';

import { onMount, useRef } from '@huds0n/utilities';

import {
  handleScreenLayout,
  ScreenManagerState,
  setAppearance,
} from '../helpers';
import { Props } from '../types';

import { StatusBar } from './StatusBar';

export function ScreenManagerComponent(props: Props) {
  const { children, initialAppearance } = props;

  const safeAreaSizeHandlerRef = useRef<View>();

  onMount(() => {
    initialAppearance && setAppearance(initialAppearance);
  });

  const [{ appearance }] = ScreenManagerState.useState('appearance');

  return (
    <View
      style={{
        backgroundColor: appearance.backgroundColor,
        flex: 1,
      }}
    >
      <View
        //@ts-ignore
        ref={safeAreaSizeHandlerRef}
        onLayout={handleScreenLayout}
        style={{ position: 'absolute', height: '100%', width: '100%' }}
      />

      <StatusBar />
      {children}
    </View>
  );
}
