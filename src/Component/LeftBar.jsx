"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeftBar = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const react_native_1 = require("react-native");
const helpers_1 = require("../helpers");
function LeftBar() {
    const [{ appearance, safeLeft }] = helpers_1.ScreenManagerState.useState([
        'appearance',
        'safeLeft',
    ]);
    if (!(appearance === null || appearance === void 0 ? void 0 : appearance.leftBar)) {
        return null;
    }
    return (<react_native_1.View style={{
            backgroundColor: appearance.leftBar || undefined,
            height: '100%',
            left: 0,
            position: 'absolute',
            width: safeLeft,
        }}/>);
}
exports.LeftBar = LeftBar;
(0, tslib_1.__exportStar)(require("../helpers"), exports);
