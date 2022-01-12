"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenManagerComponent = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const react_native_1 = require("react-native");
const utilities_1 = require("@huds0n/utilities");
const helpers_1 = require("../helpers");
const contentsIOS_1 = require("./contentsIOS");
function ScreenManagerComponent(props) {
    const { initialAppearance } = props;
    (0, utilities_1.onMount)(() => {
        initialAppearance && (0, helpers_1.setAppearance)(initialAppearance);
    }, { layout: "BEFORE" });
    const [isMounted, setIsMounted] = (0, utilities_1.useState)(false);
    (0, utilities_1.onMount)(() => {
        setIsMounted(true);
    }, { layout: "AFTER" });
    return (<react_native_1.View style={{ flex: 1 }}>
      <react_native_1.SafeAreaView style={{ position: "absolute", height: "100%", width: "100%" }}>
        {isMounted && (<react_native_1.View onLayout={helpers_1.handleScreenLayout} style={{ flex: 1 }}/>)}
      </react_native_1.SafeAreaView>

      <contentsIOS_1.ContentsIOS {...props}/>
    </react_native_1.View>);
}
exports.ScreenManagerComponent = ScreenManagerComponent;
