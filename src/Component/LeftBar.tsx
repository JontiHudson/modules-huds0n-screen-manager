import React from 'react';

import { View } from 'react-native';

import { ScreenManagerState } from '../helpers';

export function LeftBar() {
  const [{ appearance, safeLeft }] = ScreenManagerState.useState([
    'appearance',
    'safeLeft',
  ]);

  if (!appearance?.leftBar) {
    return null;
  }

  return (
    <View
      style={{
        backgroundColor: appearance.leftBar || undefined,
        height: '100%',
        left: 0,
        position: 'absolute',
        width: safeLeft,
      }}
    />
  );
}

export * from '../helpers';
