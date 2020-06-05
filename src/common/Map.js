// // import React, { Component } from 'react';
// // import { withGoogleMap, GoogleMap,Marker,InfoWindow } from 'react-google-maps';
// // class Map extends Component {
// //
// //     constructor (props) {
// //         super(props)
// //        this.state={
// //             isShowInfoWindow : false
// //         };
// //
// //     };
// //
// //
// //
// //
// //     componentDidMount() {
// //     //     const infoWindow = new google.maps.InfoWindow({
// //     //         content : renderToString(myComponent),
// //     //         position : { lat :  9.6615, lng : 0.0255  }
// //     //     })
// //     //
// //     // }
// //     //
// //     //     infoWindow.open(map);
// //     }
// //
// //     showInfoWindow(){
// //         this.setState({isShowInfoWindow:true})
// //     }
// //
// //     render() {
// //         let  {isShowInfoWindow} =this.state
// //
// //         const GoogleMapExample = withGoogleMap(props => (
// //             <GoogleMap
// //                 defaultCenter = { { lat: 9.6615, lng: 80.0255 } }
// //                 defaultZoom = { 13 }
// //             >
// //
// //                 <Marker position={{ lat: 9.6615, lng: 80.0255 }}
// //                         onClick={this.showInfoWindow.bind(this)}>
// //                     {isShowInfoWindow &&
// //                     <InfoWindow
// //                         key={`infowindow-${'test'}`}
// //                         visible={true}>
// //                         <div>{"Test info vfdfdfgfdkjhjkfdjk"}</div>
// //                     </InfoWindow>
// //                     }
// //                 </Marker>
// //
// //             </GoogleMap>
// //         ));
// //
// //         return(
// //             <div>
// //                 <GoogleMapExample
// //                     containerElement={ <div style={{ height: `500px`, width: '800px' }} /> }
// //                     mapElement={ <div style={{ height: `100%` }} /> }
// //                 />
// //             </div>
// //         );
// //     }
// // };
// // export default Map;
//
//
//
// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import MapContainer from './MapContainer';
// //import './style.css';
//
// class Map extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: 'React'
//         };
//     }
//
//     render() {
//         return (
//             <div>
//                 <MapContainer issue = {{name : "Test", description : "This is the mager issue" , lat :  9.6615, lng : 80.0255  } }/>
//             </div>
//         );
//     }
// }
//
// export default Map