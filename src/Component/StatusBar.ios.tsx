import React, { useMemo } from 'react';
import { StatusBar as StatusBarRN, useColorScheme, View } from 'react-native';

import { colorIsDark } from '@huds0n/utilities';

import { ScreenManagerState } from '../helpers';

export function StatusBar() {
  const [
    {
      appearance: { statusBar, statusProps },
      safeTop,
    },
  ] = ScreenManagerState.useState(['appearance', 'safeTop']);

  const isLight = useColorScheme() === 'light';

  const barStyle = useMemo(() => {
    if (statusBar ? colorIsDark(statusBar) : isLight) return 'light-content';

    return 'dark-content';
  }, [statusBar, isLight]);

  if (!statusBar) {
    return <StatusBarRN hidden />;
  }

  return (
    <View
      style={{
        backgroundColor: statusBar,
        height: safeTop,
        position: 'absolute',
        top: 0,
        width: '100%',
      }}
    >
      <StatusBarRN barStyle={barStyle} hidden={false} {...statusProps} />
    </View>
  );
}

export * from '../helpers';
