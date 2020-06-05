// import {Component} from "react";
// import React from 'react';
// import Select from "./elements/Select";
//
// class Main extends Component {
//
//     constructor (props) {
//         super(props)
//         this.state = {
//             createReq : {}
//         }
//     }
//
//     handleOnChange(){
//
//     }
//
//
//
// render() {
//
//         let {createReq} = this.state
//         return (
//             <div>
//                 <h1 className='c'>Hello world</h1>
//                 <Select
//                     items={[
//                         {key:'Car',value:'Car'},
//                         {key:'Van',value:'Van'}
//                     ]}
//                     refer='type'
//                     label="Type"
//                     value={createReq.type}
//                     handleOnChange={this.handleOnChange.bind(this)}/>
//             </div>
//
//
//         );
//     }
// }
//
// export default Main;
"use strict";
// class Auth {
//
//     static saveToken (token) {
//         localStorage.setItem('wavy-token', JSON.stringify(token))
//     }
//
//     static getToken () {
//         return JSON.parse(localStorage.getItem('wavy-token'))
//     }
//
//     static saveUser (user) {
//         localStorage.setItem('wavy-user', JSON.stringify(user))
//     }
//
//     static getUser () {
//         return JSON.parse(localStorage.getItem('wavy-user'))
//     }
//
//     static isAccessToken () {
//         const token = JSON.parse(localStorage.getItem('wavy-token'))
//         return !!token ? !!token : false
//     }
//
//     static getRoles () {
//         const user = JSON.parse(localStorage.getItem('wavy-user'))
//         return !!user && !!user.roles ? user.roles : []
//     }
//
//     static getUserType () {
//         const user = JSON.parse(localStorage.getItem('wavy-user'))
//         return !!user && !!user.userType ? user.userType : ''
//     }
//
//     static clearAll () {
//         localStorage.removeItem('wavy-token')
//         localStorage.removeItem('wavy-user')
//     }
//
//
//     static getUserId () {
//         const user = JSON.parse(localStorage.getItem('wavy-user'))
//         return !!user && !!user._id ? user._id : ''
//     }
// }
//
// export default Auth
"use strict";
// import Auth from "./Auth";
//
//
// export const  getPathPrefix = function (props) {
//         const { location } = props;
//         return  location.pathname.split( '/' )[1]
// }
//
//
// export const  getValueByKey = function (array,key) {
//     let obj ={}
//     if (array && array.length > 0)
//         obj = array.find(obj => obj.key === key);
//
//     return obj && obj.value ? obj.value : ""
//
// };
//
// export const  getObjectByKey = function (array,key) {
//     let obj ={}
//     if (array && array.length > 0)
//         obj = array.find(obj => obj.key === key);
//
//     return obj
//
// };
//
// export const  getSafeValues = function () {
//
//     if (arguments.length < 2)
//         return null;
//
//     let object = arguments[0];
//     for (let i = 1; i < arguments.length; i++) {
//         try {
//             object = object[arguments[i]];
//         } catch (e) {
//             return null;
//         }
//     }
//     return object;
//
// };
//
// export const getImageExtension = function (image) {
//     if (image && image.name)
//         if(image.name.split('.') && image.name.split('.').length > 0)
//             return image.name.split('.').pop()
//
//     return  "jpeg"
//
// };
//
// export const isAllowedModules = function (validSubscriptionList,key) {
//     let allowedModules = getSafeValues(validSubscriptionList,'allowedModules')
//     if(Array.isArray(allowedModules) && allowedModules.indexOf(key) > -1)
//         return true;
//
//     return  false
// };
//
// export const isAllowedSubmenu = function (allowedRoles) {
//     console.log(Auth.getRoles())
//     const userRoles = Auth.getRoles()
//     const found = allowedRoles.some(role=> userRoles.indexOf(role) >= 0)
//     return found
// };
"use strict";
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
// import React from 'react';
// import { compose, withStateHandlers } from "recompose";
// import { InfoWindow, withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';
//
//
// const Map = compose(
//     withStateHandlers((props) => ({
//
//         isMarkerShown: true,
//         isShowInfoWindow:false,
//         markerPosition: {lat: props.content.latitude?props.content.latitude:0, lng: props.content.longitude ?props.content.longitude: 0}
//     }), {
//         onMapClick: ({ isMarkerShown }) => (e) => ({
//             markerPosition: e.latLng,
//             isMarkerShown:true
//         }),
//
//         onMarkerClick : ({ isShowInfoWindow }) => (e) => ({
//                 isShowInfoWindow:true
//             }),
//         onInfoCloseClick : ({ isShowInfoWindow }) => (e) => ({
//             isShowInfoWindow:false
//         })
//     }),
//     withScriptjs,
//     withGoogleMap
// )
// (props =>
//     <GoogleMap
//         defaultZoom={12}
//         defaultCenter={{ lat: props.content.latitude ? props.content.latitude : 0, lng: props.content.longitude ? props.content.longitude: 0}}
//         //onClick={props.onMapClick}
//     >
//         {props.isMarkerShown && <Marker position={props.markerPosition} onClick={props.onMarkerClick}>
//
//             {props.isShowInfoWindow &&
//             <InfoWindow
//                 onCloseClick={props.onInfoCloseClick}
//                 key={`infowindow-${'id'}`}
//                 options={{
//                     alignBottom: true,
//                     pane: 'mapPane',
//                     boxStyle: {
//                         width: '800px'
//                     }}}
//                 visible={true}>
//                 {/*<div style={{maxWidth : 800, width : 500}}>*/}
//                     <div style={{maxWidth : 400, width : 300}}>
//                         <div className='row ml-3 mr-3'>
//                             <h6 className='col-md-8'>
//                                 {props.content.type}
//                             </h6>
//                             <h6 className='col-md-4 text-right'><span className='badge badge-success'>{props.content.status}</span>
//                             </h6>
//                     </div>
//                     <div className='row ml-3 mr-3'>
//                         <b className='col-md-12'>
//                             category : {props.content.category}
//                         </b>
//                     </div>
//                         <div className='row ml-3 mr-3'>
//                             <b className='col-md-12'>
//                                user : {props.content.category}
//                             </b>
//                         </div>
//                 </div>
//
//             </InfoWindow>
//             }
//         </Marker>
//             }
//
//
//     </GoogleMap>
// )
//
// export default class MapContainer extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//
//     render() {
//         console.log('ccccc',this.props.content)
//         return (
//             <div style={{ height: '100%' }}>
//                 <Map
//                     googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC052ouc29GFiZfjpUxJ9-XUBW-ltoGvC8"
//                     loadingElement={<div style={{ height: `100%` }} />}
//                     containerElement={<div style={{ height: `400px` }} />}
//                     mapElement={<div style={{ height: `100%` }} />}
//                     content = {this.props.content}
//                 />
//             </div>
//         )
//     }
// }
"use strict";
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
// import React, { Component, Fragment } from 'react'
// import $ from 'jquery'
//
// class DatePicker extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             value:'',
//         };
//         if (props.value)
//             this.state.value = props.value
//
//     }
//
//     componentDidMount() {
//         const now = new Date();
//         const day = ("0" + now.getDate()).slice(-2);
//         const month = ("0" + (now.getMonth() + 1)).slice(-2);
//         const today = now.getFullYear()+"-"+(month)+"-"+(day) ;
//         // this.state.value = today
//         this.props.handleOnChange(today,this.props.refer);
//
//     }
//
//     componentWillReceiveProps(nextProps, nextContext) {
//        if (nextProps.value)
//            this.state.value = nextProps.value;
//         this.forceUpdate()
//
//     }
//
//     handleOnChange (event, refer) {
//       this.state.value = event.target.value;
//       this.props.handleOnChange(event.target.value, refer);
//
//
//         this.forceUpdate()
//     }
//
//     render () {
//         const {refer,label,min,max,placeholder } = this.props
//
//         return (
//             <Fragment>
//                 {label &&
//                     <label htmlFor="sel1" style={{fontSize:'14px'}}>{label}</label>
//                 }
//                 <div onChange={event => this.handleOnChange(event, refer)}>
//                     <input
//                         type='date'
//                         min={min}
//                         max={max}
//                         id={refer}
//                         className="form-control"
//                         placeholder={placeholder}
//                         value={this.state.value}/>
//
//                 </div>
//             </Fragment>
//         )
//     }
// }
//
// export default DatePicker
"use strict";
// import React, { Component, Fragment } from 'react'
//
// class Input extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             value:'',
//         };
//
//         if (props.value)
//             this.state.value = props.value
//
//     }
//
//     componentWillReceiveProps(nextProps, nextContext) {
//         this.state.value = nextProps.value ? nextProps.value : ''
//         this.forceUpdate()
//
//     }
//
//     handleOnChange (event, refer) {
//         if(event.target.type ==='number'){
//             this.state.value = parseInt(event.target.value);
//             this.props.handleOnChange((event.target.value), refer);
//         }else{
//             this.state.value = event.target.value;
//             this.props.handleOnChange(event.target.value, refer);
//         }
//
//         this.forceUpdate()
//     }
//     imposeMinMax(el){
//         if(el.target.value !== "" && el.target.type === 'number'){
//             if(el.target.min && parseInt(el.value) < parseInt(el.target.min)){
//                 el.target.value = el.target.min;
//             }
//             if(el.target.max && parseInt(el.target.value) > parseInt(el.target.max)){
//                 el.target.value = el.target.max;
//             }
//         }
//     }
//     render () {
//         const { refer,label,type,min,max,step,placeholder, disabled } = this.props
//
//         return (
//             <Fragment>
//                 {label &&
//                     <label htmlFor="sel1" style={{fontSize:'14px'}}>{label}</label>
//                 }
//                 <div onChange={event => this.handleOnChange(event, refer)}>
//                     {type !== 'textArea' &&
//                     <input
//                         type={type ? type : 'text'}
//                         step={step}
//                         min={min}
//                         max={max}
//                         className="form-control"
//                         onKeyUp={event => this.imposeMinMax(event)}
//                         placeholder={placeholder}
//                         disabled = {disabled}
//                         value={this.state.value}/>
//                     }
//
//                     {type === 'textArea' &&
//                     <textarea
//                         className="form-control"
//                         placeholder={placeholder}
//                         disabled = {disabled}
//                         value={this.state.value}/>
//                     }
//                 </div>
//             </Fragment>
//         )
//     }
// }
//
// export default Input
"use strict";
// import React, { Component, Fragment } from 'react'
//
// class Radio extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             value:'',
//             disabled : props.disabled ? props.disabled : false,
//             options:props.items ? props.items : []
//         };
//         if (props.value)
//             this.state.value = props.value
//
//     }
//
//     componentWillReceiveProps(nextProps, nextContext) {
//        if (nextProps.value)
//            this.state.value = nextProps.value;
//        if (nextProps.items)
//            this.state.options = nextProps.items
//         this.forceUpdate()
//
//     }
//
//     handleOnChange (event, refer) {
//         this.state.value = event.target.value;
//         this.props.handleOnChange(event.target.value, refer);
//         this.forceUpdate()
//     }
//
//     render () {
//         const { refer, items, label ,value,inline } = this.props
//
//         return (
//             <Fragment>
//                 {label &&
//                     <div className="row">
//                         <label className='col-md-12' htmlFor="sel1" style={{fontSize:'14px'}}>{label}</label>
//                     </div>
//
//                 }
//                 {
//                         this.state.options.map(item => {
//
//                                 return (
//                                     <div className={inline ? 'row form-check-inline':'row form-check'} onChange={event => this.handleOnChange(event, refer)}>
//                                         <div className="col-sm-1">
//                                             <input type="radio"
//                                                    value={item.key}
//                                                    disabled={this.state.disabled}
//                                                    name={refer}
//                                                    checked={this.state.value === item.key}/>
//                                         </div>
//                                         <div className="col-sm-8">
//                                             &nbsp;{item.value}
//                                         </div>
//                                     </div>
//
//                                 )
//                         })
//                     }
//
//             </Fragment>
//         )
//     }
// }
//
// export default Radio
"use strict";
// import React, { Component, Fragment } from 'react'
// import $ from 'jquery'
//
// class Select extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             value:'',
//             options:props.items ? props.items : []
//         };
//         if (props.value)
//             this.state.value = props.value
//
//     }
//
//     componentDidMount() {
//         // $('#mySelect').selectpicker();
//     }
//
//     componentWillReceiveProps(nextProps, nextContext) {
//        if (nextProps.value)
//            this.state.value = nextProps.value;
//        if (nextProps.items)
//            this.state.options = nextProps.items
//         this.forceUpdate()
//
//     }
//
//     handleOnChange (event, refer) {
//         let subValue = undefined;
//         if(this.props.subValueField && this.props.items[event.target.selectedIndex-1])
//             subValue = this.props.items[event.target.selectedIndex-1][this.props.subValueField]
//
//         this.state.value = event.target.value;
//         this.props.handleOnChange(event.target.value, refer,subValue);
//         this.forceUpdate()
//     }
//
//     render () {
//         const { refer, items, label, disabled,value,optionKey,optionValue,placeholder } = this.props
//
//         return (
//             <Fragment>
//                 {label &&
//                     <label htmlFor="sel1" style={{fontSize:'14px'}}>{label}</label>
//                 }
//                 <div onChange={event => this.handleOnChange(event, refer)}>
//                     <select  id="mySelect" data-show-content="true"
//                              disabled = {disabled ? disabled : false}
//                         className="form-control" value={this.state.value}>
//                         <option value="" >{placeholder ? placeholder : 'Select'}</option>
//                         {
//                             this.state.options.map((item,key)=> {
//                                 return (
//                                     <option key={key} value={optionKey ? item[optionKey] : item.key} > {optionValue ? item[optionValue] : item.value} </option>
//
//                                 )
//                             })
//                         }
//                     </select>
//                 </div>
//             </Fragment>
//         )
//     }
// }
//
// export default Select
"use strict";
// import React, { Component, Fragment } from 'react'
// import $ from 'jquery'
// import TimePicker from "rc-time-picker/es/TimePicker";
//
// class DatePicker extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             value:'',
//             format : props.format ? props.format :'HH:mm a'
//         };
//         if (props.value)
//             this.state.value = props.value
//
//
//     }
//
//     componentDidMount() {
//         this.props.handleOnChange(this.props.defaultValue.format('YYYY-MM-DD HH:mm Z'),this.props.refer);
//
//     }
//
//     componentWillReceiveProps(nextProps, nextContext) {
//        if(nextProps.value)
//            this.state.value = nextProps.value;
//         this.forceUpdate()
//
//     }
//
//     handleOnChange (refer,value) {
//
//     if(value){
//       this.state.value = value.format(this.props.format);
//       this.props.handleOnChange(value.format('YYYY-MM-DD HH:mm Z'), refer);
//
//     }
//
//         this.forceUpdate()
//     }
//
//     render () {
//         const {refer,label,format ,defaultValue} = this.props
//
//         return (
//             <Fragment>
//                 {label &&
//                     <label htmlFor="sel1" style={{fontSize:'14px'}}>{label}</label>
//                 }
//                 <div>
//                     <TimePicker
//                         showSecond={false}
//                         defaultValue={defaultValue ? defaultValue : this.state.value}
//                         id={refer}
//                         ref={refer}
//                         className="xxx"
//                         onChange={this.handleOnChange.bind(this,refer)}
//                         format={this.state.format}
//                         // value = {createReq.pickupTime}
//                         use12Hours
//                         inputReadOnly
//                     />
//
//                 </div>
//             </Fragment>
//         )
//     }
// }
//
// export default DatePicker
"use strict";
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
