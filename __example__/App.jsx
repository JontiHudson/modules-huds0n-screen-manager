"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const react_native_1 = require("react-native");
const screen_manager_1 = require("@huds0n/screen-manager");
function ScreenManagerPlayground() {
    const { screenHeight, screenWidth } = screen_manager_1.ScreenManager.useDimensions();
    const appearance = screen_manager_1.ScreenManager.getAppearance();
    const { bottomBar, leftBar, rightBar, statusBar } = appearance;
    return (<screen_manager_1.ScreenManager initialAppearance={{
            backgroundColor: BACKGROUND_COLOR,
            statusBar: STATUS_BAR_COLOR,
        }}>
      <react_native_1.View style={styles.container}>
        <react_native_1.View style={styles.contentsContainer}>
          <react_native_1.Text>Screen Dimensions</react_native_1.Text>
          <react_native_1.Text>{`${screenHeight}px x ${screenWidth}px`}</react_native_1.Text>

          <react_native_1.Pressable style={[
            styles.button,
            { backgroundColor: statusBar ? ON_COLOR : OFF_COLOR },
        ]} onPress={() => screen_manager_1.ScreenManager.setAppearance(Object.assign(Object.assign({}, appearance), { statusBar: statusBar ? null : STATUS_BAR_COLOR }))}>
            <react_native_1.Text>Status Bar</react_native_1.Text>
          </react_native_1.Pressable>

          <react_native_1.Pressable style={[
            styles.button,
            { backgroundColor: leftBar ? ON_COLOR : OFF_COLOR },
        ]} onPress={() => screen_manager_1.ScreenManager.setAppearance(Object.assign(Object.assign({}, appearance), { leftBar: leftBar ? null : SIDE_BAR_COLOR }))}>
            <react_native_1.Text>Left Bar</react_native_1.Text>
          </react_native_1.Pressable>

          <react_native_1.Pressable style={[
            styles.button,
            { backgroundColor: rightBar ? ON_COLOR : OFF_COLOR },
        ]} onPress={() => screen_manager_1.ScreenManager.setAppearance(Object.assign(Object.assign({}, appearance), { rightBar: rightBar ? null : SIDE_BAR_COLOR }))}>
            <react_native_1.Text>Right Bar</react_native_1.Text>
          </react_native_1.Pressable>

          <react_native_1.Pressable style={[
            styles.button,
            { backgroundColor: bottomBar ? ON_COLOR : OFF_COLOR },
        ]} onPress={() => screen_manager_1.ScreenManager.setAppearance(Object.assign(Object.assign({}, appearance), { bottomBar: bottomBar ? null : BOTTOM_BAR_COLOR }))}>
            <react_native_1.Text>Bottom Bar</react_native_1.Text>
          </react_native_1.Pressable>
        </react_native_1.View>
      </react_native_1.View>
    </screen_manager_1.ScreenManager>);
}
exports.default = ScreenManagerPlayground;
const ON_COLOR = '#5ac18e';
const OFF_COLOR = '#ff4040';
const BACKGROUND_COLOR = '#eeeeee';
const STATUS_BAR_COLOR = '#008080';
const BOTTOM_BAR_COLOR = '#008080';
const SIDE_BAR_COLOR = '#000000';
const styles = react_native_1.StyleSheet.create({
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
