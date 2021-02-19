import React from 'react';

import { View } from 'react-native';

import { ScreenManagerState } from '../helpers';

export function RightBar() {
  const [{ appearance, safeRight }] = ScreenManagerState.useState([
    'appearance',
    'safeRight',
  ]);

  if (!appearance?.rightBar) {
    return null;
  }

  return (
    <View
      style={{
        backgroundColor: appearance.rightBar || undefined,
        height: '100%',
        position: 'absolute',
        right: 0,
        width: safeRight,
      }}
    />
  );
}

export * from '../helpers';
