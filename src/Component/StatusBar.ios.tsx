import React from 'react';
import { StatusBar as StatusBarRN, useColorScheme, View } from 'react-native';

import { ScreenManagerState } from '../helpers';

export function StatusBar() {
  const [{ appearance, safeTop }] = ScreenManagerState.useState([
    'appearance',
    'safeTop',
  ]);

  const isLight = useColorScheme() === 'light';

  if (!appearance?.statusBar) {
    return <StatusBarRN />;
  }

  return (
    <View
      style={{
        backgroundColor: appearance.statusBar || undefined,
        height: safeTop,
        position: 'absolute',
        top: 0,
        width: '100%',
      }}
    >
      <StatusBarRN
        barStyle={isLight ? 'light-content' : 'dark-content'}
        hidden={false}
        {...appearance?.statusProps}
      />
    </View>
  );
}

export * from '../helpers';
