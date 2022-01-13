"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RightBar = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const react_native_1 = require("react-native");
const helpers_1 = require("../helpers");
function RightBar() {
    const [{ appearance, safeRight }] = helpers_1.ScreenManagerState.useState([
        'appearance',
        'safeRight',
    ]);
    if (!appearance?.rightBar) {
        return null;
    }
    return (<react_native_1.View style={{
            backgroundColor: appearance.rightBar || undefined,
            height: '100%',
            position: 'absolute',
            right: 0,
            width: safeRight,
        }}/>);
}
exports.RightBar = RightBar;
(0, tslib_1.__exportStar)(require("../helpers"), exports);
