"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenManager = void 0;
const tslib_1 = require("tslib");
const react_1 = (0, tslib_1.__importDefault)(require("react"));
const Component_1 = require("./Component");
const helpers_1 = require("./helpers");
class ScreenManager extends react_1.default.Component {
    static get dimensions() {
        return (0, helpers_1.getDimensions)();
    }
    render() {
        return <Component_1.ScreenManagerComponent {...this.props}/>;
    }
}
exports.ScreenManager = ScreenManager;
ScreenManager.appearanceOnMount = helpers_1.appearanceOnMount;
ScreenManager.getAppearance = helpers_1.getAppearance;
ScreenManager.setAppearance = helpers_1.setAppearance;
ScreenManager.useDimensions = helpers_1.useDimensions;
