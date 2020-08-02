"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _jquery = _interopRequireDefault(require("jquery"));

var _Select = _interopRequireDefault(require("./Select"));

var _Input = _interopRequireDefault(require("./Input"));

var _Radio = _interopRequireDefault(require("./Radio"));

var _CheckBox = _interopRequireDefault(require("./CheckBox"));

var _TimePicker = _interopRequireDefault(require("./TimePicker"));

var _DatePicker = _interopRequireDefault(require("./DatePicker"));

var _MultiSelect = _interopRequireDefault(require("./MultiSelect"));

require("bootstrap/dist/css/bootstrap.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var Form = /*#__PURE__*/function (_Component) {
  _inherits(Form, _Component);

  var _super = _createSuper(Form);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _super.call(this, props);
    _this.state = {
      req: props.req,
      items: []
    };

    _this.setDependencies(props);

    return _this;
  }

  _createClass(Form, [{
    key: "setDependencies",
    value: function setDependencies(props) {
      props.schema.forEach(function (element) {
        if (element.dependencies) {
          var array = [];
          element.dependencies.forEach(function (dependencyRefer) {
            var findElement = props.schema.find(function (e) {
              return dependencyRefer === e.refer;
            });

            if (findElement && findElement.dependencies) {
              array = array.concat(findElement.dependencies);
            }
          });
          element.dependencies = element.dependencies.concat(array);
        }
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      if (nextProps.req) this.setState({
        req: nextProps.req
      });
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(value, refer) {
      var _this2 = this;

      var req = this.state.req;
      req[refer] = value;
      var element = this.props.schema.find(function (e) {
        return e.refer === refer;
      });

      if (element && element.dependencies && Array.isArray(element.dependencies)) {
        element.dependencies.forEach(function (dependRefer) {
          var dependentElement = _this2.props.schema.find(function (e) {
            return e.refer === dependRefer;
          });

          if (dependentElement && req[dependentElement.refer]) {
            req[dependentElement.refer] = "";
          }
        });
      }

      this.setState({
        req: req
      });
    }
  }, {
    key: "isHiddenElement",
    value: function isHiddenElement(schema) {
      if (!schema.isHidden) return false;
      var req = this.state.req;
      return eval(schema.isHidden);
    }
  }, {
    key: "getItemsList",
    value: function getItemsList(element) {
      var elementTypes = ['SELECT', 'RADIO', 'CHECKBOX', 'MULTI_SELECT'];

      if (elementTypes.indexOf(element.type) > -1) {
        var items = this.state.items;
        items = element.isDynamicOptions || !element.items ? this.props.getItemsList(element.refer) : element.items;
        this.setState({
          items: items
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          schema = _this$props.schema,
          req = _this$props.req;
      var items = this.state.items;
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, schema.map(function (element) {
        if (!_this3.isHiddenElement(element)) return /*#__PURE__*/_react.default.createElement("label", {
          className: element.className ? element.className : 'col-3',
          onFocus: _this3.getItemsList.bind(_this3, element)
        }, element.type === 'SELECT' && /*#__PURE__*/_react.default.createElement(_Select.default, _extends({}, element, {
          items: items,
          value: req[element.refer],
          handleOnChange: _this3.handleOnChange.bind(_this3)
        })), element.type === 'INPUT' && /*#__PURE__*/_react.default.createElement(_Input.default, _extends({}, element, {
          value: req[element.refer],
          handleOnChange: _this3.handleOnChange.bind(_this3)
        })), element.type === 'RADIO' && /*#__PURE__*/_react.default.createElement(_Radio.default, _extends({}, element, {
          items: items,
          value: req[element.refer],
          handleOnChange: _this3.handleOnChange.bind(_this3)
        })), element.type === 'CHECKBOX' && /*#__PURE__*/_react.default.createElement(_CheckBox.default, _extends({}, element, {
          items: items,
          value: req[element.refer],
          handleOnChange: _this3.handleOnChange.bind(_this3)
        })), element.type === 'DATE_PICKER' && /*#__PURE__*/_react.default.createElement(_DatePicker.default, _extends({}, element, {
          value: req[element.refer],
          handleOnChange: _this3.handleOnChange.bind(_this3)
        })), element.type === 'TIME_PICKER' && /*#__PURE__*/_react.default.createElement(_TimePicker.default, _extends({}, element, {
          value: req[element.refer],
          handleOnChange: _this3.handleOnChange.bind(_this3)
        })), element.type === 'MULTI_SELECT' && /*#__PURE__*/_react.default.createElement(_MultiSelect.default, _extends({}, element, {
          items: items,
          value: req[element.refer],
          handleOnChange: _this3.handleOnChange.bind(_this3)
        })));
      }));
    }
  }]);

  return Form;
}(_react.Component);

var _default = Form;
exports.default = _default;