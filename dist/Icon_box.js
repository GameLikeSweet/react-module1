"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("./main.css");
var _react = _interopRequireDefault(require("react"));
var _Icon_p = _interopRequireDefault(require("./Icon_p"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var article = [];
for (var i = 0; i < 4; i++) {
  article.push(/*#__PURE__*/_react["default"].createElement(_Icon_p["default"], {
    i: i
  }));
}
function icon_box() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "icon_box"
  }, article);
}
var _default = exports["default"] = icon_box;