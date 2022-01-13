"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appearanceOnMount = exports.setAppearance = exports.getAppearance = exports.useDimensions = exports.getDimensions = exports.handleScreenLayout = exports.ScreenManagerState = void 0;
const react_native_1 = require("react-native");
const shared_state_1 = require("@huds0n/shared-state");
const utilities_1 = require("@huds0n/utilities");
const screen = react_native_1.Dimensions.get("screen");
exports.ScreenManagerState = new shared_state_1.SharedState({
    appearance: {},
    deviceHeight: screen.height,
    deviceWidth: screen.width,
    orientation: (0, utilities_1.getOrientation)(),
    safeBottom: 0,
    safeLeft: 0,
    safeRight: 0,
    safeTop: 0,
    isInitialized: false,
});
function to2DecimalPlaces(value) {
    return Math.round((value + Number.EPSILON) * 100) / 100;
}
function handleScreenLayout({ nativeEvent: { layout: { height: safeHeight, width: safeWidth, x, y }, }, }) {
    const { height: deviceHeight, width: deviceWidth } = react_native_1.Dimensions.get("screen");
    const orientation = (0, utilities_1.getOrientation)();
    const deviceHeight2DP = to2DecimalPlaces(deviceHeight);
    const deviceWidth2DP = to2DecimalPlaces(deviceWidth);
    const safeHeight2DP = to2DecimalPlaces(safeHeight);
    const safeWidth2DP = to2DecimalPlaces(safeWidth);
    const safeTop = react_native_1.Platform.OS === "ios" ? y : deviceHeight2DP - safeHeight2DP;
    const safeBottom = react_native_1.Platform.OS === "ios" ? deviceHeight2DP - safeHeight2DP - y : 0;
    const safeRight = deviceWidth2DP - safeWidth2DP - x;
    exports.ScreenManagerState.setState({
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
exports.handleScreenLayout = handleScreenLayout;
function getDimensions() {
    const { appearance, deviceHeight, deviceWidth, orientation, safeBottom, safeLeft, safeRight, safeTop, isInitialized, } = exports.ScreenManagerState.state;
    const screenMarginBottom = (appearance === null || appearance === void 0 ? void 0 : appearance.bottomBar) ? safeBottom : 0;
    const screenMarginLeft = (appearance === null || appearance === void 0 ? void 0 : appearance.leftBar) ? safeLeft : 0;
    const screenMarginRight = (appearance === null || appearance === void 0 ? void 0 : appearance.rightBar) ? safeRight : 0;
    const screenMarginTop = (appearance === null || appearance === void 0 ? void 0 : appearance.statusBar) ? safeTop : 0;
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
exports.getDimensions = getDimensions;
function useDimensions() {
    exports.ScreenManagerState.useState([
        "appearance",
        "deviceHeight",
        "deviceWidth",
        "safeBottom",
        "safeLeft",
        "safeRight",
        "safeTop",
        "isInitialized",
    ]);
    return getDimensions();
}
exports.useDimensions = useDimensions;
function getAppearance() {
    return exports.ScreenManagerState.state.appearance;
}
exports.getAppearance = getAppearance;
function setAppearance(appearance) {
    exports.ScreenManagerState.setState({ appearance });
}
exports.setAppearance = setAppearance;
function appearanceOnMount(appearance) {
    (0, utilities_1.onMount)(() => {
        setAppearance(appearance);
    }, { layout: "BEFORE" });
}
exports.appearanceOnMount = appearanceOnMount;
