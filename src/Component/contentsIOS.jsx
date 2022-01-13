"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentsIOS = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const react_native_1 = require("react-native");
const helpers_1 = require("../helpers");
const BottomBar_1 = require("./BottomBar");
const RightBar_1 = require("./RightBar");
const LeftBar_1 = require("./LeftBar");
const StatusBar_ios_1 = require("./StatusBar.ios");
function ContentsIOS(props) {
    const { children } = props;
    const [appearance] = helpers_1.ScreenManagerState.useProp("appearance");
    const { screenMarginBottom, screenMarginLeft, screenMarginRight, screenMarginTop, } = (0, helpers_1.useDimensions)();
    return (<react_native_1.View style={{ flex: 1 }}>
      <BottomBar_1.BottomBar />
      <LeftBar_1.LeftBar />
      <RightBar_1.RightBar />
      <StatusBar_ios_1.StatusBar />

      <react_native_1.View style={{
            backgroundColor: appearance.backgroundColor,
            bottom: screenMarginBottom,
            left: screenMarginLeft,
            position: "absolute",
            right: screenMarginRight,
            top: screenMarginTop,
        }}>
        {children}
      </react_native_1.View>
    </react_native_1.View>);
}
exports.ContentsIOS = ContentsIOS;
