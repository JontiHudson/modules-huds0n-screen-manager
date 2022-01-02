import React from 'react';
import { View } from 'react-native';

import { theme } from '@huds0n/theming/src/theme';
import { huds0nState } from '@huds0n/utilities/src/_core';

import { ScreenManagerState } from '../helpers';

export function BottomBar() {
  const [{ appearance, safeBottom }] = ScreenManagerState.useState([
    'appearance',
    'safeBottom',
  ]);
  const [inputOpen] = huds0nState.useProp('isCustomInputOpen');

  const { KEYBOARD } = theme.colors;

  if (!appearance?.bottomBar) {
    return null;
  }

  return (
    <View
      style={{
        backgroundColor: inputOpen ? KEYBOARD : appearance.bottomBar,
        bottom: 0,
        height: safeBottom,
        position: 'absolute',
        width: '100%',
      }}
    />
  );
}

export * from '../helpers';
