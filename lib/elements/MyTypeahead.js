"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrapTypeahead = require("react-bootstrap-typeahead");

require("react-bootstrap-typeahead/css/Typeahead.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MyTypeahead = /*#__PURE__*/function (_Component) {
  _inherits(MyTypeahead, _Component);

  var _super = _createSuper(MyTypeahead);

  function MyTypeahead(props) {
    var _this;

    _classCallCheck(this, MyTypeahead);

    _this = _super.call(this, props);
    _this.state = {
      selected: [],
      options: props.items ? props.items : []
    };
    return _this;
  }

  _createClass(MyTypeahead, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      if (nextProps.items) this.state.options = nextProps.items;
      this.forceUpdate();
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(refer, selected) {
      this.setState({
        selected: selected
      });
      var optionKey = this.props.optionKey ? this.props.optionKey : 'key';
      if (selected && selected.length > 0) this.props.handleOnChange(selected[0][optionKey], refer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          refer = _this$props.refer,
          label = _this$props.label,
          disabled = _this$props.disabled,
          value = _this$props.value,
          optionKey = _this$props.optionKey,
          optionValue = _this$props.optionValue,
          placeholder = _this$props.placeholder,
          hidden = _this$props.hidden;
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, label && !hidden && /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "sel1",
        style: {
          fontSize: '14px'
        }
      }, label), !hidden && /*#__PURE__*/_react.default.createElement(_reactBootstrapTypeahead.Typeahead, {
        id: refer,
        labelKey: optionValue ? optionValue : 'value',
        onChange: this.handleOnChange.bind(this, refer),
        options: this.state.options,
        placeholder: placeholder,
        selected: this.state.selected
      }));
    }
  }]);

  return MyTypeahead;
}(_react.Component);

var _default = MyTypeahead;
exports.default = _default;