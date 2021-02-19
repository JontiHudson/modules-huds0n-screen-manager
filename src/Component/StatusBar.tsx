import React from 'react';
import { StatusBar as StatusBarRN, useColorScheme } from 'react-native';

import { useEffect } from '@huds0n/utilities';

import { ScreenManagerState } from '../helpers';

export function StatusBar() {
  const [{ appearance }] = ScreenManagerState.useState('appearance');

  const isLight = useColorScheme() === 'light';

  // const color = (typeof appearance?.statusBar === 'string' && appearance.statusBar) || undefined

  // useEffect(() => {
  //   if()
  // }, [color], {layout: 'BEFORE'})

  return (
    <StatusBarRN
      barStyle={isLight ? 'light-content' : 'dark-content'}
      hidden={!appearance?.statusBar}
      backgroundColor={
        (typeof appearance?.statusBar === 'string' && appearance.statusBar) ||
        undefined
      }
      {...appearance?.statusProps}
    />
  );
}

export * from '../helpers';
