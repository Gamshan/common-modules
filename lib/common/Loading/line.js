"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./line.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingLine = function LoadingLine() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "loader"
  });
};

var _default = LoadingLine;
exports.default = _default;