import React from "react";
import { View } from "react-native";

import { onMount, useRef, useState } from "@huds0n/utilities";

import {
  handleScreenLayout,
  ScreenManagerState,
  setAppearance,
} from "../helpers";
import type { Types } from "../types";

import { StatusBar } from "./StatusBar";

export function ScreenManagerComponent(props: Types.Props) {
  const { children, initialAppearance } = props;

  const safeAreaSizeHandlerRef = useRef<View>();

  onMount(() => {
    initialAppearance && setAppearance(initialAppearance);
  });

  const [isMounted, setIsMounted] = useState(false);

  onMount(
    () => {
      setIsMounted(true);
    },
    { layout: "AFTER" }
  );

  const [{ appearance }] = ScreenManagerState.useState("appearance");

  return (
    <View
      style={{
        backgroundColor: appearance.backgroundColor,
        flex: 1,
        // Stops screen scrolling out of bounds on expo web
        overflow: "hidden",
      }}
    >
      {isMounted && (
        <View
          //@ts-ignore
          ref={safeAreaSizeHandlerRef}
          onLayout={handleScreenLayout}
          style={{ position: "absolute", height: "100%", width: "100%" }}
        />
      )}

      <StatusBar />
      {children}
    </View>
  );
}
