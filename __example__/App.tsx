import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ScreenManager } from '@huds0n/screen-manager';

export default function ScreenManagerPlayground() {
  const { screenHeight, screenWidth } = ScreenManager.useDimensions();

  const appearance = ScreenManager.getAppearance();

  const { bottomBar, leftBar, rightBar, statusBar } = appearance;

  return (
    <ScreenManager
      initialAppearance={{
        backgroundColor: BACKGROUND_COLOR,
        statusBar: STATUS_BAR_COLOR,
      }}
    >
      <View style={styles.container}>
        <View style={styles.contentsContainer}>
          <Text>Screen Dimensions</Text>
          <Text>{`${screenHeight}px x ${screenWidth}px`}</Text>

          <Pressable
            style={[
              styles.button,
              { backgroundColor: statusBar ? ON_COLOR : OFF_COLOR },
            ]}
            onPress={() =>
              ScreenManager.setAppearance({
                ...appearance,
                statusBar: statusBar ? null : STATUS_BAR_COLOR,
              })
            }
          >
            <Text>Status Bar</Text>
          </Pressable>

          <Pressable
            style={[
              styles.button,
              { backgroundColor: leftBar ? ON_COLOR : OFF_COLOR },
            ]}
            onPress={() =>
              ScreenManager.setAppearance({
                ...appearance,
                leftBar: leftBar ? null : SIDE_BAR_COLOR,
              })
            }
          >
            <Text>Left Bar</Text>
          </Pressable>

          <Pressable
            style={[
              styles.button,
              { backgroundColor: rightBar ? ON_COLOR : OFF_COLOR },
            ]}
            onPress={() =>
              ScreenManager.setAppearance({
                ...appearance,
                rightBar: rightBar ? null : SIDE_BAR_COLOR,
              })
            }
          >
            <Text>Right Bar</Text>
          </Pressable>

          <Pressable
            style={[
              styles.button,
              { backgroundColor: bottomBar ? ON_COLOR : OFF_COLOR },
            ]}
            onPress={() =>
              ScreenManager.setAppearance({
                ...appearance,
                bottomBar: bottomBar ? null : BOTTOM_BAR_COLOR,
              })
            }
          >
            <Text>Bottom Bar</Text>
          </Pressable>
        </View>
      </View>
    </ScreenManager>
  );
}

const ON_COLOR = '#5ac18e';
const OFF_COLOR = '#ff4040';

const BACKGROUND_COLOR = '#eeeeee';

const STATUS_BAR_COLOR = '#008080';
const BOTTOM_BAR_COLOR = '#008080';
const SIDE_BAR_COLOR = '#000000';

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  container: {
    alignItems: 'center',

    flex: 1,
    justifyContent: 'center',
  },
  contentsContainer: {
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    padding: 20,
  },
});
