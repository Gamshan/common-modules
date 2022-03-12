"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

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

var Input = /*#__PURE__*/function (_Component) {
  _inherits(Input, _Component);

  var _super = _createSuper(Input);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _super.call(this, props);
    _this.state = {
      value: ''
    };
    if (props.value) _this.state.value = props.value;
    _this.myRef = /*#__PURE__*/_react.default.createRef();
    return _this;
  }

  _createClass(Input, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      this.state.value = nextProps.value ? nextProps.value : '';
      this.forceUpdate();
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(event, refer) {
      if (event.target.type === 'number') {
        this.state.value = parseInt(event.target.value);
        this.props.handleOnChange(event.target.value, refer);
      } else {
        this.state.value = event.target.value;
        this.props.handleOnChange(event.target.value, refer);
      }

      this.forceUpdate();
    }
  }, {
    key: "imposeMinMax",
    value: function imposeMinMax(el, refer) {
      if (el.target.value !== '' && el.target.type === 'number') {
        if (el.target.min && parseInt(el.target.value) < parseInt(el.target.min)) {
          this.setState({
            value: el.target.min
          });
          this.props.handleOnChange(el.target.min, refer);
        }

        if (el.target.max && parseInt(el.target.value) > parseInt(el.target.max)) {
          this.setState({
            value: el.target.max
          });
          this.props.handleOnChange(el.target.max, refer);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          refer = _this$props.refer,
          label = _this$props.label,
          disabled = _this$props.disabled,
          inputType = _this$props.inputType,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step,
          placeholder = _this$props.placeholder,
          className = _this$props.className,
          rows = _this$props.rows;
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, label && /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "sel1",
        style: {
          fontSize: '14px'
        }
      }, label), inputType !== 'textArea' && /*#__PURE__*/_react.default.createElement("input", {
        ref: this.myRef,
        type: inputType ? inputType : 'text',
        step: step,
        min: min,
        max: max,
        className: "form-control ".concat(className),
        onBlur: function onBlur(event) {
          return _this2.imposeMinMax(event, refer);
        },
        placeholder: placeholder,
        disabled: disabled,
        onChange: function onChange(event) {
          return _this2.handleOnChange(event, refer);
        },
        value: this.state.value
      }), inputType === 'textArea' && /*#__PURE__*/_react.default.createElement("textarea", {
        ref: this.myRef,
        rows: rows,
        className: "form-control",
        placeholder: placeholder,
        onChange: function onChange(event) {
          return _this2.handleOnChange(event, refer);
        },
        value: this.state.value
      }));
    }
  }]);

  return Input;
}(_react.Component);

var _default = Input;
exports.default = _default;