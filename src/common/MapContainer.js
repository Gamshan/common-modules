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
