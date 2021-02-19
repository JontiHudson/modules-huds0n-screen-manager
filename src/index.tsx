import React from 'react';

import { ScreenManagerComponent } from './Component';
import { getAppearance, setAppearance, useDimensions } from './helpers';
import { theming } from './theming';
import * as Types from './types';

export namespace ScreenManager {
  export type Appearance = Types.Appearance;
  export type BarAppearance = Types.BarAppearance;
  export type Dimension = Types.Dimensions;
  export type Orientation = Types.Orientation;
  export type Props = Types.Props;
}

export class ScreenManager extends React.Component<ScreenManager.Props> {
  static theming = theming;

  static getAppearance = getAppearance;
  static setAppearance = setAppearance;
  static useDimensions = useDimensions;

  render() {
    return <ScreenManagerComponent {...this.props} />;
  }
}
