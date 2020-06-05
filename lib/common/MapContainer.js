"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _recompose = require("recompose");

var _reactGoogleMaps = require("react-google-maps");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Map = (0, _recompose.compose)((0, _recompose.withStateHandlers)(function (props) {
  return {
    isMarkerShown: true,
    isShowInfoWindow: false,
    markerPosition: {
      lat: props.content.latitude ? props.content.latitude : 0,
      lng: props.content.longitude ? props.content.longitude : 0
    }
  };
}, {
  onMapClick: function onMapClick(_ref) {
    var isMarkerShown = _ref.isMarkerShown;
    return function (e) {
      return {
        markerPosition: e.latLng,
        isMarkerShown: true
      };
    };
  },
  onMarkerClick: function onMarkerClick(_ref2) {
    var isShowInfoWindow = _ref2.isShowInfoWindow;
    return function (e) {
      return {
        isShowInfoWindow: true
      };
    };
  },
  onInfoCloseClick: function onInfoCloseClick(_ref3) {
    var isShowInfoWindow = _ref3.isShowInfoWindow;
    return function (e) {
      return {
        isShowInfoWindow: false
      };
    };
  }
}), _reactGoogleMaps.withScriptjs, _reactGoogleMaps.withGoogleMap)(function (props) {
  return /*#__PURE__*/_react.default.createElement(_reactGoogleMaps.GoogleMap, {
    defaultZoom: 12,
    defaultCenter: {
      lat: props.content.latitude ? props.content.latitude : 0,
      lng: props.content.longitude ? props.content.longitude : 0
    } //onClick={props.onMapClick}

  }, props.isMarkerShown && /*#__PURE__*/_react.default.createElement(_reactGoogleMaps.Marker, {
    position: props.markerPosition,
    onClick: props.onMarkerClick
  }, props.isShowInfoWindow && /*#__PURE__*/_react.default.createElement(_reactGoogleMaps.InfoWindow, {
    onCloseClick: props.onInfoCloseClick,
    key: "infowindow-".concat('id'),
    options: {
      alignBottom: true,
      pane: 'mapPane',
      boxStyle: {
        width: '800px'
      }
    },
    visible: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      maxWidth: 400,
      width: 300
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row ml-3 mr-3"
  }, /*#__PURE__*/_react.default.createElement("h6", {
    className: "col-md-8"
  }, props.content.type), /*#__PURE__*/_react.default.createElement("h6", {
    className: "col-md-4 text-right"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "badge badge-success"
  }, props.content.status))), /*#__PURE__*/_react.default.createElement("div", {
    className: "row ml-3 mr-3"
  }, /*#__PURE__*/_react.default.createElement("b", {
    className: "col-md-12"
  }, "category : ", props.content.category)), /*#__PURE__*/_react.default.createElement("div", {
    className: "row ml-3 mr-3"
  }, /*#__PURE__*/_react.default.createElement("b", {
    className: "col-md-12"
  }, "user : ", props.content.category))))));
});

var MapContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(MapContainer, _React$Component);

  var _super = _createSuper(MapContainer);

  function MapContainer(props) {
    _classCallCheck(this, MapContainer);

    return _super.call(this, props);
  }

  _createClass(MapContainer, [{
    key: "render",
    value: function render() {
      console.log('ccccc', this.props.content);
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          height: '100%'
        }
      }, /*#__PURE__*/_react.default.createElement(Map, {
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC052ouc29GFiZfjpUxJ9-XUBW-ltoGvC8",
        loadingElement: /*#__PURE__*/_react.default.createElement("div", {
          style: {
            height: "100%"
          }
        }),
        containerElement: /*#__PURE__*/_react.default.createElement("div", {
          style: {
            height: "400px"
          }
        }),
        mapElement: /*#__PURE__*/_react.default.createElement("div", {
          style: {
            height: "100%"
          }
        }),
        content: this.props.content
      }));
    }
  }]);

  return MapContainer;
}(_react.default.Component);

exports.default = MapContainer;