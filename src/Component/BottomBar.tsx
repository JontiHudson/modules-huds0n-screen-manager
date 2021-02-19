import React from 'react';
import { View } from 'react-native';

import { Core } from '@huds0n/core';

import { ScreenManagerState } from '../helpers';

export function BottomBar() {
  const [{ appearance, safeBottom }] = ScreenManagerState.useState([
    'appearance',
    'safeBottom',
  ]);
  const [{ customInputState }] = Core.useState([
    'customInputState',
    'darkMode',
  ]);

  const { keyboardColor } = Core.getInputColors();

  if (!appearance?.bottomBar) {
    return null;
  }

  return (
    <View
      style={{
        backgroundColor:
          customInputState !== 'CLOSED'
            ? keyboardColor
            : appearance.bottomBar || undefined,
        bottom: 0,
        height: safeBottom,
        position: 'absolute',
        width: '100%',
      }}
    />
  );
}

export * from '../helpers';
