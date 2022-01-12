import React from "react";
import { SafeAreaView, View } from "react-native";

import { onMount, useState } from "@huds0n/utilities";

import { handleScreenLayout, setAppearance } from "../helpers";
import type { Types } from "../types";

import { ContentsIOS } from "./contentsIOS";

export function ScreenManagerComponent(props: Types.Props) {
  const { initialAppearance } = props;

  onMount(
    () => {
      initialAppearance && setAppearance(initialAppearance);
    },
    { layout: "BEFORE" }
  );

  const [isMounted, setIsMounted] = useState(false);

  onMount(
    () => {
      setIsMounted(true);
    },
    { layout: "AFTER" }
  );

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView
        style={{ position: "absolute", height: "100%", width: "100%" }}
      >
        {isMounted && (
          <View onLayout={handleScreenLayout} style={{ flex: 1 }} />
        )}
      </SafeAreaView>

      <ContentsIOS {...props} />
    </View>
  );
}
