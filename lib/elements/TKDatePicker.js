"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

var _moment = _interopRequireDefault(require("moment"));

require("react-datepicker/dist/react-datepicker.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TKDatePicker = function TKDatePicker(props) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "sel1",
    style: {
      fontSize: '14px'
    }
  }, 'label xx'), /*#__PURE__*/_react.default.createElement("div", null));
};

var _default = TKDatePicker;
exports.default = _default;