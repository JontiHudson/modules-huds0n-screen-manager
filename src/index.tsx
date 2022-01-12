import React from "react";

import { ScreenManagerComponent } from "./Component";
import {
  appearanceOnMount,
  getAppearance,
  getDimensions,
  setAppearance,
  useDimensions,
} from "./helpers";

import type { Types } from "./types";

export class ScreenManager extends React.Component<Types.Props> {
  static get dimensions() {
    return getDimensions();
  }
  static appearanceOnMount = appearanceOnMount;
  static getAppearance = getAppearance;
  static setAppearance = setAppearance;
  static useDimensions = useDimensions;

  render() {
    return <ScreenManagerComponent {...this.props} />;
  }
}

export type { Types as ScreenManagerTypes } from "./types";
