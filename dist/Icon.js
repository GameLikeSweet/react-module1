"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("./main.css");
var _icon = _interopRequireDefault(require("./img/icon1.png"));
var _icon2 = _interopRequireDefault(require("./img/icon2.png"));
var _icon3 = _interopRequireDefault(require("./img/icon3.png"));
var _icon4 = _interopRequireDefault(require("./img/icon4.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var img = [_icon["default"], _icon2["default"], _icon3["default"], _icon4["default"]];
function icon(_ref) {
  var i = _ref.i;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: img[i]
  }));
}
var _default = exports["default"] = icon;