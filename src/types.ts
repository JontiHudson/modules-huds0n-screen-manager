import { StatusBarProps } from 'react-native';

export type BarAppearance = string | false | null | undefined;
export type Orientation = 'PORTRAIT' | 'LANDSCAPE';

export type Appearance = {
  backgroundColor?: string;
  bottomBar?: BarAppearance;
  leftBar?: BarAppearance;
  rightBar?: BarAppearance;
  statusBar?: BarAppearance;
  statusProps?: StatusBarProps;
};

export type Props = {
  children: React.ReactNode | React.ReactNode[];
  initialAppearance?: Appearance;
};

export type Layout = {
  deviceHeight: number;
  deviceWidth: number;
  orientation: Orientation;
  safeBottom: number;
  safeLeft: number;
  safeRight: number;
  safeTop: number;
  isInitialized: boolean;
};

export type Dimensions = {
  deviceHeight: number;
  deviceWidth: number;
  orientation: Orientation;
  screenHeight: number;
  screenMarginBottom: number;
  screenMarginLeft: number;
  screenMarginRight: number;
  screenMarginTop: number;
  screenWidth: number;
  isInitialized: boolean;
};

export type State = Layout & { appearance: Appearance };
