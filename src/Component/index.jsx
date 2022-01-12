"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenManagerComponent = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const react_native_1 = require("react-native");
const utilities_1 = require("@huds0n/utilities");
const helpers_1 = require("../helpers");
const StatusBar_1 = require("./StatusBar");
function ScreenManagerComponent(props) {
    const { children, initialAppearance } = props;
    const safeAreaSizeHandlerRef = (0, utilities_1.useRef)();
    (0, utilities_1.onMount)(() => {
        initialAppearance && (0, helpers_1.setAppearance)(initialAppearance);
    });
    const [isMounted, setIsMounted] = (0, utilities_1.useState)(false);
    (0, utilities_1.onMount)(() => {
        setIsMounted(true);
    }, { layout: "AFTER" });
    const [{ appearance }] = helpers_1.ScreenManagerState.useState("appearance");
    return (<react_native_1.View style={{
            backgroundColor: appearance.backgroundColor,
            flex: 1,
            overflow: "hidden",
        }}>
      {isMounted && (<react_native_1.View ref={safeAreaSizeHandlerRef} onLayout={helpers_1.handleScreenLayout} style={{ position: "absolute", height: "100%", width: "100%" }}/>)}

      <StatusBar_1.StatusBar />
      {children}
    </react_native_1.View>);
}
exports.ScreenManagerComponent = ScreenManagerComponent;
