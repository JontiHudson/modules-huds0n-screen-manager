import React from "react";
import { View } from "react-native";

import { ScreenManagerState, useDimensions } from "../helpers";
import type { Types } from "../types";

import { BottomBar } from "./BottomBar";
import { RightBar } from "./RightBar";
import { LeftBar } from "./LeftBar";
import { StatusBar } from "./StatusBar.ios";

export function ContentsIOS(props: Types.Props) {
  const { children } = props;

  const [appearance] = ScreenManagerState.useProp("appearance");
  const {
    screenMarginBottom,
    screenMarginLeft,
    screenMarginRight,
    screenMarginTop,
  } = useDimensions();

  return (
    <View style={{ flex: 1 }}>
      <BottomBar />
      <LeftBar />
      <RightBar />
      <StatusBar />

      <View
        style={{
          backgroundColor: appearance.backgroundColor,
          bottom: screenMarginBottom,
          left: screenMarginLeft,
          position: "absolute",
          right: screenMarginRight,
          top: screenMarginTop,
        }}
      >
        {children}
      </View>
    </View>
  );
}
