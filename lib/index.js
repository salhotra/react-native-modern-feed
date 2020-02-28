"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    mainCard: {
        height: 280,
        zIndex: 10
    }
});
var ModernFeed = function (_a) {
    var data = _a.data, keyExtractor = _a.keyExtractor, renderFooter = _a.renderFooter, renderMainCard = _a.renderMainCard, renderUnderCard = _a.renderUnderCard, mainCardStyle = _a.mainCardStyle, listContainerStyle = _a.listContainerStyle, footerContainerStyle = _a.footerContainerStyle, underCardContainerStyle = _a.underCardContainerStyle, props = __rest(_a, ["data", "keyExtractor", "renderFooter", "renderMainCard", "renderUnderCard", "mainCardStyle", "listContainerStyle", "footerContainerStyle", "underCardContainerStyle"]);
    var _b = react_1.useState([]), stickyHeaderIndices = _b[0], setStickyHeaderIndices = _b[1];
    react_1.useEffect(function () {
        var indices = data.reduce(function (acc, _item, index) {
            return __spreadArrays(acc, [index * 3, index * 3 + 2]);
        }, []);
        setStickyHeaderIndices(indices);
    }, [data, data.length]);
    return (react_1["default"].createElement(react_native_1.ScrollView, __assign({}, props, { style: listContainerStyle, showsVerticalScrollIndicator: false, stickyHeaderIndices: stickyHeaderIndices }), data.map(function (item, index) {
        var key = keyExtractor(item, index);
        return [
            react_1["default"].createElement(react_native_1.View, { key: key + "-0", style: react_native_1.StyleSheet.flatten([styles.mainCard, mainCardStyle]) }, renderMainCard(item)),
            react_1["default"].createElement(react_native_1.View, { key: key + "-1", style: underCardContainerStyle }, renderUnderCard(item)),
            react_1["default"].createElement(react_native_1.View, { key: key + "-2", style: footerContainerStyle }, renderFooter(item)),
        ];
    })));
};
ModernFeed.defaultProps = {
    mainCardStyle: {},
    listContainerStyle: {},
    footerContainerStyle: {},
    underCardContainerStyle: {},
    renderFooter: function () { return null; }
};
exports["default"] = ModernFeed;
//# sourceMappingURL=index.js.map