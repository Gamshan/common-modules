"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Select = _interopRequireDefault(require("./elements/Select"));

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

var Main = /*#__PURE__*/function (_Component) {
  _inherits(Main, _Component);

  var _super = _createSuper(Main);

  function Main(props) {
    var _this;

    _classCallCheck(this, Main);

    _this = _super.call(this, props);
    _this.state = {
      createReq: {}
    };
    return _this;
  }

  _createClass(Main, [{
    key: "handleOnChange",
    value: function handleOnChange() {}
  }, {
    key: "render",
    value: function render() {
      var createReq = this.state.createReq;
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", {
        className: "c"
      }, "Hello world"), /*#__PURE__*/_react.default.createElement(_Select.default, {
        items: [{
          key: 'Car',
          value: 'Car'
        }, {
          key: 'Van',
          value: 'Van'
        }],
        refer: "type",
        label: "Type",
        value: createReq.type,
        handleOnChange: this.handleOnChange.bind(this)
      }));
    }
  }]);

  return Main;
}(_react.Component);

var _default = Main;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Auth = /*#__PURE__*/function () {
  function Auth() {
    _classCallCheck(this, Auth);
  }

  _createClass(Auth, null, [{
    key: "saveToken",
    value: function saveToken(token) {
      localStorage.setItem('wavy-token', JSON.stringify(token));
    }
  }, {
    key: "getToken",
    value: function getToken() {
      return JSON.parse(localStorage.getItem('wavy-token'));
    }
  }, {
    key: "saveUser",
    value: function saveUser(user) {
      localStorage.setItem('wavy-user', JSON.stringify(user));
    }
  }, {
    key: "getUser",
    value: function getUser() {
      return JSON.parse(localStorage.getItem('wavy-user'));
    }
  }, {
    key: "isAccessToken",
    value: function isAccessToken() {
      var token = JSON.parse(localStorage.getItem('wavy-token'));
      return !!token ? !!token : false;
    }
  }, {
    key: "getRoles",
    value: function getRoles() {
      var user = JSON.parse(localStorage.getItem('wavy-user'));
      return !!user && !!user.roles ? user.roles : [];
    }
  }, {
    key: "getUserType",
    value: function getUserType() {
      var user = JSON.parse(localStorage.getItem('wavy-user'));
      return !!user && !!user.userType ? user.userType : '';
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      localStorage.removeItem('wavy-token');
      localStorage.removeItem('wavy-user');
    }
  }, {
    key: "getUserId",
    value: function getUserId() {
      var user = JSON.parse(localStorage.getItem('wavy-user'));
      return !!user && !!user._id ? user._id : '';
    }
  }]);

  return Auth;
}();

var _default = Auth;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAllowedSubmenu = exports.isAllowedModules = exports.getImageExtension = exports.getSafeValues = exports.getObjectByKey = exports.getValueByKey = exports.getPathPrefix = void 0;

var _Auth = _interopRequireDefault(require("./Auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPathPrefix = function getPathPrefix(props) {
  var location = props.location;
  return location.pathname.split('/')[1];
};

exports.getPathPrefix = getPathPrefix;

var getValueByKey = function getValueByKey(array, key) {
  var obj = {};
  if (array && array.length > 0) obj = array.find(function (obj) {
    return obj.key === key;
  });
  return obj && obj.value ? obj.value : "";
};

exports.getValueByKey = getValueByKey;

var getObjectByKey = function getObjectByKey(array, key) {
  var obj = {};
  if (array && array.length > 0) obj = array.find(function (obj) {
    return obj.key === key;
  });
  return obj;
};

exports.getObjectByKey = getObjectByKey;

var getSafeValues = function getSafeValues() {
  if (arguments.length < 2) return null;
  var object = arguments[0];

  for (var i = 1; i < arguments.length; i++) {
    try {
      object = object[arguments[i]];
    } catch (e) {
      return null;
    }
  }

  return object;
};

exports.getSafeValues = getSafeValues;

var getImageExtension = function getImageExtension(image) {
  if (image && image.name) if (image.name.split('.') && image.name.split('.').length > 0) return image.name.split('.').pop();
  return "jpeg";
};

exports.getImageExtension = getImageExtension;

var isAllowedModules = function isAllowedModules(validSubscriptionList, key) {
  var allowedModules = getSafeValues(validSubscriptionList, 'allowedModules');
  if (Array.isArray(allowedModules) && allowedModules.indexOf(key) > -1) return true;
  return false;
};

exports.isAllowedModules = isAllowedModules;

var isAllowedSubmenu = function isAllowedSubmenu(allowedRoles) {
  console.log(_Auth.default.getRoles());

  var userRoles = _Auth.default.getRoles();

  var found = allowedRoles.some(function (role) {
    return userRoles.indexOf(role) >= 0;
  });
  return found;
};

exports.isAllowedSubmenu = isAllowedSubmenu;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./bar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingBar = function LoadingBar() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "loading"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "loading-bar"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "loading-bar"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "loading-bar"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "loading-bar"
  }));
};

var _default = LoadingBar;
exports.default = _default;
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _MapContainer = _interopRequireDefault(require("./MapContainer"));

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

//import './style.css';
var Map = /*#__PURE__*/function (_Component) {
  _inherits(Map, _Component);

  var _super = _createSuper(Map);

  function Map() {
    var _this;

    _classCallCheck(this, Map);

    _this = _super.call(this);
    _this.state = {
      name: 'React'
    };
    return _this;
  }

  _createClass(Map, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_MapContainer.default, {
        issue: {
          name: "Test",
          description: "This is the mager issue",
          lat: 9.6615,
          lng: 80.0255
        }
      }));
    }
  }]);

  return Map;
}(_react.Component);

var _default = Map;
exports.default = _default;
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
// import React, { Component, PropTypes } from 'react';
//
// class Checkbox extends Component {
//     state = {
//         isChecked: this.props.isChecked,
//     };
//
//     toggleCheckboxChange = () => {
//         const { handleCheckboxChange, label, isChecked } = this.props;
//
//         this.setState(({ isChecked }) => (
//             {
//                 isChecked: !isChecked,
//             }
//         ));
//
//         handleCheckboxChange(label);
//     };
//
//     render() {
//         const { label, isChecked, items } = this.props;
//
//
//         return (
//
//                 <div className='form-check'>
//                     <label className='form-check-label' htmlFor='exampleCheck1'>{label}</label>
//                     {items && items.map(item =>{
//                       return  <div>
//                             <input className='form-check-input'
//                                    type="checkbox"
//                                    ref={item.key}
//                                    checked={this.state.isChecked}
//                                    onChange={this.toggleCheckboxChange}
//                             />
//                             <label className='form-check-label' htmlFor='exampleCheck1'>{item.value}</label>
//
//                         </div>
//                     })
//
//                     }
//
//                 </div>
//         );
//     }
// }
//
// // Checkbox.propTypes = {
// //     label: PropTypes.string.isRequired,
// //     handleCheckboxChange: PropTypes.func.isRequired,
// // };
//
// export default Checkbox;
"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _jquery = _interopRequireDefault(require("jquery"));

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

var DatePicker = /*#__PURE__*/function (_Component) {
  _inherits(DatePicker, _Component);

  var _super = _createSuper(DatePicker);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _super.call(this, props);
    _this.state = {
      value: ''
    };
    if (props.value) _this.state.value = props.value;
    return _this;
  }

  _createClass(DatePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var now = new Date();
      var day = ("0" + now.getDate()).slice(-2);
      var month = ("0" + (now.getMonth() + 1)).slice(-2);
      var today = now.getFullYear() + "-" + month + "-" + day; // this.state.value = today

      this.props.handleOnChange(today, this.props.refer);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      if (nextProps.value) this.state.value = nextProps.value;
      this.forceUpdate();
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(event, refer) {
      this.state.value = event.target.value;
      this.props.handleOnChange(event.target.value, refer);
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          refer = _this$props.refer,
          label = _this$props.label,
          min = _this$props.min,
          max = _this$props.max,
          placeholder = _this$props.placeholder;
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, label && /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "sel1",
        style: {
          fontSize: '14px'
        }
      }, label), /*#__PURE__*/_react.default.createElement("div", {
        onChange: function onChange(event) {
          return _this2.handleOnChange(event, refer);
        }
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "date",
        min: min,
        max: max,
        id: refer,
        className: "form-control",
        placeholder: placeholder,
        value: this.state.value
      })));
    }
  }]);

  return DatePicker;
}(_react.Component);

var _default = DatePicker;
exports.default = _default;
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
    value: function imposeMinMax(el) {
      if (el.target.value !== "" && el.target.type === 'number') {
        if (el.target.min && parseInt(el.value) < parseInt(el.target.min)) {
          el.target.value = el.target.min;
        }

        if (el.target.max && parseInt(el.target.value) > parseInt(el.target.max)) {
          el.target.value = el.target.max;
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
          type = _this$props.type,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step,
          placeholder = _this$props.placeholder,
          disabled = _this$props.disabled;
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, label && /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "sel1",
        style: {
          fontSize: '14px'
        }
      }, label), /*#__PURE__*/_react.default.createElement("div", {
        onChange: function onChange(event) {
          return _this2.handleOnChange(event, refer);
        }
      }, type !== 'textArea' && /*#__PURE__*/_react.default.createElement("input", {
        type: type ? type : 'text',
        step: step,
        min: min,
        max: max,
        className: "form-control",
        onKeyUp: function onKeyUp(event) {
          return _this2.imposeMinMax(event);
        },
        placeholder: placeholder,
        disabled: disabled,
        value: this.state.value
      }), type === 'textArea' && /*#__PURE__*/_react.default.createElement("textarea", {
        className: "form-control",
        placeholder: placeholder,
        disabled: disabled,
        value: this.state.value
      })));
    }
  }]);

  return Input;
}(_react.Component);

var _default = Input;
exports.default = _default;
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

var Radio = /*#__PURE__*/function (_Component) {
  _inherits(Radio, _Component);

  var _super = _createSuper(Radio);

  function Radio(props) {
    var _this;

    _classCallCheck(this, Radio);

    _this = _super.call(this, props);
    _this.state = {
      value: '',
      disabled: props.disabled ? props.disabled : false,
      options: props.items ? props.items : []
    };
    if (props.value) _this.state.value = props.value;
    return _this;
  }

  _createClass(Radio, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      if (nextProps.value) this.state.value = nextProps.value;
      if (nextProps.items) this.state.options = nextProps.items;
      this.forceUpdate();
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(event, refer) {
      this.state.value = event.target.value;
      this.props.handleOnChange(event.target.value, refer);
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          refer = _this$props.refer,
          items = _this$props.items,
          label = _this$props.label,
          value = _this$props.value,
          inline = _this$props.inline;
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, label && /*#__PURE__*/_react.default.createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react.default.createElement("label", {
        className: "col-md-12",
        htmlFor: "sel1",
        style: {
          fontSize: '14px'
        }
      }, label)), this.state.options.map(function (item) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: inline ? 'row form-check-inline' : 'row form-check',
          onChange: function onChange(event) {
            return _this2.handleOnChange(event, refer);
          }
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "col-sm-1"
        }, /*#__PURE__*/_react.default.createElement("input", {
          type: "radio",
          value: item.key,
          disabled: _this2.state.disabled,
          name: refer,
          checked: _this2.state.value === item.key
        })), /*#__PURE__*/_react.default.createElement("div", {
          className: "col-sm-8"
        }, "\xA0", item.value));
      }));
    }
  }]);

  return Radio;
}(_react.Component);

var _default = Radio;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _jquery = _interopRequireDefault(require("jquery"));

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

var Select = /*#__PURE__*/function (_Component) {
  _inherits(Select, _Component);

  var _super = _createSuper(Select);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _super.call(this, props);
    _this.state = {
      value: '',
      options: props.items ? props.items : []
    };
    if (props.value) _this.state.value = props.value;
    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {// $('#mySelect').selectpicker();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      if (nextProps.value) this.state.value = nextProps.value;
      if (nextProps.items) this.state.options = nextProps.items;
      this.forceUpdate();
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(event, refer) {
      var subValue = undefined;
      if (this.props.subValueField && this.props.items[event.target.selectedIndex - 1]) subValue = this.props.items[event.target.selectedIndex - 1][this.props.subValueField];
      this.state.value = event.target.value;
      this.props.handleOnChange(event.target.value, refer, subValue);
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          refer = _this$props.refer,
          items = _this$props.items,
          label = _this$props.label,
          disabled = _this$props.disabled,
          value = _this$props.value,
          optionKey = _this$props.optionKey,
          optionValue = _this$props.optionValue,
          placeholder = _this$props.placeholder;
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, label && /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "sel1",
        style: {
          fontSize: '14px'
        }
      }, label), /*#__PURE__*/_react.default.createElement("div", {
        onChange: function onChange(event) {
          return _this2.handleOnChange(event, refer);
        }
      }, /*#__PURE__*/_react.default.createElement("select", {
        id: "mySelect",
        "data-show-content": "true",
        disabled: disabled ? disabled : false,
        className: "form-control",
        value: this.state.value
      }, /*#__PURE__*/_react.default.createElement("option", {
        value: ""
      }, placeholder ? placeholder : 'Select'), this.state.options.map(function (item, key) {
        return /*#__PURE__*/_react.default.createElement("option", {
          key: key,
          value: optionKey ? item[optionKey] : item.key
        }, " ", optionValue ? item[optionValue] : item.value, " ");
      }))));
    }
  }]);

  return Select;
}(_react.Component);

var _default = Select;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _jquery = _interopRequireDefault(require("jquery"));

var _TimePicker = _interopRequireDefault(require("rc-time-picker/es/TimePicker"));

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

var DatePicker = /*#__PURE__*/function (_Component) {
  _inherits(DatePicker, _Component);

  var _super = _createSuper(DatePicker);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _super.call(this, props);
    _this.state = {
      value: '',
      format: props.format ? props.format : 'HH:mm a'
    };
    if (props.value) _this.state.value = props.value;
    return _this;
  }

  _createClass(DatePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.handleOnChange(this.props.defaultValue.format('YYYY-MM-DD HH:mm Z'), this.props.refer);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      if (nextProps.value) this.state.value = nextProps.value;
      this.forceUpdate();
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(refer, value) {
      if (value) {
        this.state.value = value.format(this.props.format);
        this.props.handleOnChange(value.format('YYYY-MM-DD HH:mm Z'), refer);
      }

      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          refer = _this$props.refer,
          label = _this$props.label,
          format = _this$props.format,
          defaultValue = _this$props.defaultValue;
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, label && /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "sel1",
        style: {
          fontSize: '14px'
        }
      }, label), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_TimePicker.default, {
        showSecond: false,
        defaultValue: defaultValue ? defaultValue : this.state.value,
        id: refer,
        ref: refer,
        className: "xxx",
        onChange: this.handleOnChange.bind(this, refer),
        format: this.state.format // value = {createReq.pickupTime}
        ,
        use12Hours: true,
        inputReadOnly: true
      })));
    }
  }]);

  return DatePicker;
}(_react.Component);

var _default = DatePicker;
exports.default = _default;
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

var DummyComponent = /*#__PURE__*/function (_Component) {
  _inherits(DummyComponent, _Component);

  var _super = _createSuper(DummyComponent);

  function DummyComponent() {
    _classCallCheck(this, DummyComponent);

    return _super.apply(this, arguments);
  }

  _createClass(DummyComponent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, "I am a dummy react npm module");
    }
  }]);

  return DummyComponent;
}(_react.Component);

exports.default = DummyComponent;
