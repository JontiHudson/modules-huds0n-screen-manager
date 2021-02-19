import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { onMount } from '@huds0n/utilities';

import {
  handleScreenLayout,
  setAppearance,
  ScreenManagerState,
  useDimensions,
} from '../helpers';
import { Props } from '../types';

import { BottomBar } from './BottomBar';
import { RightBar } from './RightBar';
import { LeftBar } from './LeftBar';
import { StatusBar } from './StatusBar.ios';

export function ScreenManagerComponent(props: Props) {
  const { children, initialAppearance } = props;

  onMount(
    () => {
      initialAppearance && setAppearance(initialAppearance);
    },
    { layout: 'BEFORE' },
  );

  const [appearance] = ScreenManagerState.useProp('appearance');
  const {
    screenMarginBottom,
    screenMarginLeft,
    screenMarginRight,
    screenMarginTop,
  } = useDimensions();

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView
        style={{ position: 'absolute', height: '100%', width: '100%' }}
      >
        <View onLayout={handleScreenLayout} style={{ flex: 1 }} />
      </SafeAreaView>

      <BottomBar />
      <LeftBar />
      <RightBar />
      <StatusBar />

      <View
        style={{
          backgroundColor: appearance.backgroundColor,
          bottom: screenMarginBottom,
          left: screenMarginLeft,
          position: 'absolute',
          right: screenMarginRight,
          top: screenMarginTop,
        }}
      >
        {children}
      </View>
    </View>
  );
}
