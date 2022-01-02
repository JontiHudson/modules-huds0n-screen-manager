import { Dimensions, LayoutChangeEvent, Platform } from 'react-native';

import { SharedState } from '@huds0n/shared-state';
import { getOrientation, onMount } from '@huds0n/utilities';

import * as Types from './types';

const screen = Dimensions.get('screen');

export const ScreenManagerState = new SharedState<Types.State>({
  appearance: {},
  deviceHeight: screen.height,
  deviceWidth: screen.width,
  orientation: getOrientation(),
  safeBottom: 0,
  safeLeft: 0,
  safeRight: 0,
  safeTop: 0,
  isInitialized: false,
});

// Handle screen layout

function to2DecimalPlaces(value: number) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function handleScreenLayout({
  nativeEvent: {
    layout: { height: safeHeight, width: safeWidth, x, y },
  },
}: LayoutChangeEvent) {
  const { height: deviceHeight, width: deviceWidth } = Dimensions.get('screen');

  const orientation = getOrientation();

  const deviceHeight2DP = to2DecimalPlaces(deviceHeight);
  const deviceWidth2DP = to2DecimalPlaces(deviceWidth);
  const safeHeight2DP = to2DecimalPlaces(safeHeight);
  const safeWidth2DP = to2DecimalPlaces(safeWidth);

  const safeTop = Platform.OS === 'ios' ? y : deviceHeight2DP - safeHeight2DP;
  const safeBottom =
    Platform.OS === 'ios' ? deviceHeight2DP - safeHeight2DP - y : 0;
  const safeRight = deviceWidth2DP - safeWidth2DP - x;

  ScreenManagerState.setState({
    deviceHeight: deviceHeight2DP,
    deviceWidth: deviceWidth2DP,
    orientation,
    safeBottom,
    safeLeft: x,
    safeRight,
    safeTop,
    isInitialized: true,
  });
}

export namespace getDimensions {
  export type Dimensions = Types.Dimensions;
}

export function getDimensions(): getDimensions.Dimensions {
  const {
    appearance,
    deviceHeight,
    deviceWidth,
    orientation,
    safeBottom,
    safeLeft,
    safeRight,
    safeTop,
    isInitialized,
  } = ScreenManagerState.state;

  const screenMarginBottom = appearance?.bottomBar ? safeBottom : 0;
  const screenMarginLeft = appearance?.leftBar ? safeLeft : 0;
  const screenMarginRight = appearance?.rightBar ? safeRight : 0;
  const screenMarginTop = appearance?.statusBar ? safeTop : 0;

  const screenHeight = deviceHeight - screenMarginTop - screenMarginBottom;
  const screenWidth = deviceWidth - screenMarginLeft - screenMarginRight;

  return {
    deviceHeight,
    deviceWidth,
    orientation,
    screenHeight,
    screenMarginBottom,
    screenMarginLeft,
    screenMarginRight,
    screenMarginTop,
    screenWidth,
    isInitialized,
  };
}

export namespace useDimensions {
  export type Dimensions = Types.Dimensions;
}

export function useDimensions(): useDimensions.Dimensions {
  ScreenManagerState.useState([
    'appearance',
    'deviceHeight',
    'deviceWidth',
    'safeBottom',
    'safeLeft',
    'safeRight',
    'safeTop',
    'isInitialized',
  ]);

  return getDimensions();
}

export namespace getAppearance {
  export type Appearance = Types.Appearance;
}

export function getAppearance(): getAppearance.Appearance {
  return ScreenManagerState.state.appearance;
}

export namespace setAppearance {
  export type Appearance = Types.Appearance;
}

export function setAppearance(appearance: setAppearance.Appearance) {
  ScreenManagerState.setState({ appearance });
}

export namespace appearanceOnMount {
  export type Appearance = Types.Appearance;
}

export function appearanceOnMount(appearance: appearanceOnMount.Appearance) {
  onMount(
    () => {
      setAppearance(appearance);
    },
    { layout: 'BEFORE' },
  );
}
