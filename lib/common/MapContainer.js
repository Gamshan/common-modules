"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _recompose = require("recompose");

var _reactGoogleMaps = require("react-google-maps");

var _TKDatePicker = _interopRequireDefault(require("../elements/TKDatePicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  },
  options: {
    function: function _function(maps) {
      return {
        mapTypeId: "satellite"
      };
    }
  }
}), _reactGoogleMaps.withScriptjs, _reactGoogleMaps.withGoogleMap)(function (props) {
  return /*#__PURE__*/_react.default.createElement(_reactGoogleMaps.GoogleMap, {
    defaultZoom: props.defaultZoom,
    defaultCenter: {
      lat: props.content.latitude ? props.content.latitude : 0,
      lng: props.content.longitude ? props.content.longitude : 0
    } //onClick={props.onMapClick}
    ,
    mapTypeId: props.mapTypeId
  }, props.isMarkerShown && /*#__PURE__*/_react.default.createElement(_reactGoogleMaps.Marker, {
    position: props.markerPosition,
    onClick: props.onMarkerClick
  }, props.isShowInfoWindow && !props.disableOnMarkerClick && /*#__PURE__*/_react.default.createElement(_reactGoogleMaps.InfoWindow, {
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

var MapContainer = function MapContainer(props) {
  var apiKey = props.apiKey || "AIzaSyC052ouc29GFiZfjpUxJ9-XUBW-ltoGvC8";
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(Map, {
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=".concat(apiKey),
    loadingElement: /*#__PURE__*/_react.default.createElement("div", {
      style: {
        height: "100%"
      }
    }),
    containerElement: /*#__PURE__*/_react.default.createElement("div", {
      style: {
        height: '100%'
      }
    }),
    mapElement: /*#__PURE__*/_react.default.createElement("div", {
      style: {
        height: "100%"
      }
    }),
    content: props.content,
    defaultZoom: props.defaultZoom || 12,
    mapTypeId: props.mapTypeId || "terrain",
    disableOnMarkerClick: props.disableOnMarkerClick
  }));
};

var _default = MapContainer;
exports.default = _default;