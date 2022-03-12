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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TKDatePicker = function TKDatePicker(props) {
  var refer = props.refer,
      label = props.label,
      min = props.min,
      max = props.max,
      placeholder = props.placeholder,
      handleOnChange = props.handleOnChange,
      value = props.value,
      dateFormat = props.dateFormat,
      returnFormat = props.returnFormat;

  var _React$useState = _react.default.useState(value ? new Date(value) : new Date()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      date = _React$useState2[0],
      setDate = _React$useState2[1]; // useEffect(()=>{
  //     handleCalendarClose()
  // },[])
  //
  // useEffect(()=>{
  //     if(value)
  //         setDate(new Date(value))
  // },[value])


  var initialProps = {
    dateFormat: dateFormat ? dateFormat : 'yyyy-MM-dd'
  };

  var handleDateSelect = function handleDateSelect(val) {};

  var handleCalendarClose = function handleCalendarClose() {
    var returnValue = returnFormat && (0, _moment.default)(date).format(returnFormat) ? (0, _moment.default)(date).format(returnFormat) : date;
    handleOnChange(returnValue, refer);
  };

  var handleDateChange = function handleDateChange(val) {
    setDate(val);
  };

  return /*#__PURE__*/_react.default.createElement("div", null, label && /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "sel1",
    style: {
      fontSize: '14px'
    }
  }, 'label OOO xx'), /*#__PURE__*/_react.default.createElement("div", null));
};

var _default = TKDatePicker;
exports.default = _default;