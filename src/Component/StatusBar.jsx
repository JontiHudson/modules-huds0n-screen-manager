"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusBar = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importStar)(require("react"));
const react_native_1 = require("react-native");
const utilities_1 = require("@huds0n/utilities");
const helpers_1 = require("../helpers");
function StatusBar() {
    const [{ appearance: { statusBar, statusProps }, },] = helpers_1.ScreenManagerState.useState('appearance');
    const isLight = (0, react_native_1.useColorScheme)() === 'light';
    const barStyle = (0, react_1.useMemo)(() => {
        if (statusBar ? (0, utilities_1.colorIsDark)(statusBar) : isLight)
            return 'light-content';
        return 'dark-content';
    }, [statusBar, isLight]);
    return (<react_native_1.StatusBar barStyle={barStyle} hidden={!statusBar} backgroundColor={statusBar || undefined} {...statusProps}/>);
}
exports.StatusBar = StatusBar;
(0, tslib_1.__exportStar)(require("../helpers"), exports);
