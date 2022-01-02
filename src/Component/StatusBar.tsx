import React, { useMemo } from 'react';
import { StatusBar as StatusBarRN, useColorScheme } from 'react-native';
import { colorIsDark } from '@huds0n/utilities';

import { ScreenManagerState } from '../helpers';

export function StatusBar() {
  const [
    {
      appearance: { statusBar, statusProps },
    },
  ] = ScreenManagerState.useState('appearance');

  const isLight = useColorScheme() === 'light';

  const barStyle = useMemo(() => {
    if (statusBar ? colorIsDark(statusBar) : isLight) return 'light-content';

    return 'dark-content';
  }, [statusBar, isLight]);

  return (
    <StatusBarRN
      barStyle={barStyle}
      hidden={!statusBar}
      backgroundColor={statusBar || undefined}
      {...statusProps}
    />
  );
}

export * from '../helpers';
