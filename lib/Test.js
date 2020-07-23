"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _MultiSelect = _interopRequireDefault(require("./elements/MultiSelect"));

var _Select = _interopRequireDefault(require("./elements/Select"));

var _Form = _interopRequireDefault(require("./elements/Form"));

var _dataSource = _interopRequireDefault(require("./dataSource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Test = /*#__PURE__*/function (_Component) {
  _inherits(Test, _Component);

  var _super = _createSuper(Test);

  function Test(props) {
    var _this;

    _classCallCheck(this, Test);

    _this = _super.call(this, props);
    _this.state = {
      createReq: {}
    };
    _this.schema = [{
      type: 'SELECT',
      refer: 'select1',
      items: [{
        'key': "_0001",
        "value": "0001"
      }, {
        'key': "_0002",
        "value": "0002",
        'vff': 'gghghghjg'
      }],
      dependencies: ['select2'],
      placeholder: "Select 1"
    }, {
      type: 'SELECT',
      refer: 'select2',
      className: 'col-3',
      isDynamicOptions: true,
      // isHidden : "req.select1 === '_0002' "
      placeholder: "Select 2",
      dependencies: ['select3'],
      items: _dataSource.default[_this.state.createReq.select1]
    }, {
      type: 'SELECT',
      refer: 'select3',
      className: 'col-3',
      isDynamicOptions: true,
      placeholder: "Select 3"
    }, {
      type: 'INPUT',
      refer: 'input',
      placeholder: "Please enter"
    }];
    return _this;
  }

  _createClass(Test, [{
    key: "getScgema",
    value: function getScgema() {
      var req = this.state.createReq;
      console.log("here");
      return [{
        type: 'SELECT',
        refer: 'select1',
        items: [{
          'key': "_0001",
          "value": "0001"
        }, {
          'key': "_0002",
          "value": "0002",
          'vff': 'gghghghjg'
        }],
        dependencies: ['select2'],
        placeholder: "Select 1"
      }, {
        type: 'SELECT',
        refer: 'select2',
        className: 'col-3',
        isDynamicOptions: true,
        // isHidden : "req.select1 === '_0002' "
        placeholder: "Select 2",
        dependencies: ['select3']
      }, {
        type: 'SELECT',
        refer: 'select3',
        className: 'col-3',
        isDynamicOptions: true,
        placeholder: "Select 3"
      }, {
        type: 'INPUT',
        refer: 'input',
        placeholder: "Please enter"
      }];
    }
  }, {
    key: "getItemsList",
    value: function getItemsList(refer) {
      if (refer === 'select2') return _dataSource.default[this.state.createReq.select1];
      if (refer === 'select3') return _dataSource.default[this.state.createReq.select2];
    }
  }, {
    key: "saveData",
    value: function saveData() {
      console.log(this.state.createReq);
    }
  }, {
    key: "render",
    value: function render() {
      console.log('sssssss');
      var createReq = this.state.createReq;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "col-md-12"
      }, /*#__PURE__*/_react.default.createElement(_Form.default, {
        schema: this.schema,
        req: createReq,
        getItemsList: this.getItemsList.bind(this)
      }), /*#__PURE__*/_react.default.createElement("button", {
        onClick: this.saveData.bind(this)
      }, "Save")));
    }
  }]);

  return Test;
}(_react.Component);

var _default = Test;
exports.default = _default;