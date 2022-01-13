"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomBar = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const react_native_1 = require("react-native");
const theme_1 = require("@huds0n/theming/src/theme");
const _core_1 = require("@huds0n/utilities/src/_core");
const helpers_1 = require("../helpers");
function BottomBar() {
    const [{ appearance, safeBottom }] = helpers_1.ScreenManagerState.useState([
        'appearance',
        'safeBottom',
    ]);
    const [inputOpen] = _core_1.huds0nState.useProp('isCustomInputOpen');
    const { KEYBOARD } = theme_1.theme.colors;
    if (!(appearance === null || appearance === void 0 ? void 0 : appearance.bottomBar)) {
        return null;
    }
    return (<react_native_1.View style={{
            backgroundColor: inputOpen ? KEYBOARD : appearance.bottomBar,
            bottom: 0,
            height: safeBottom,
            position: 'absolute',
            width: '100%',
        }}/>);
}
exports.BottomBar = BottomBar;
(0, tslib_1.__exportStar)(require("../helpers"), exports);
