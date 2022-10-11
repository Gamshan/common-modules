import React from 'react';
import { compose, withStateHandlers } from "recompose";
import { InfoWindow, withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';
import TKDatePicker from "../elements/TKDatePicker";


const Map = compose(
    withStateHandlers((props) => ({

        isMarkerShown: true,
        isShowInfoWindow:false,
        markerPosition: {lat: props.content.latitude?props.content.latitude:0, lng: props.content.longitude ?props.content.longitude: 0}
    }), {
        onMapClick: ({ isMarkerShown }) => (e) => ({
            markerPosition: e.latLng,
            isMarkerShown:true
        }),

        onMarkerClick : ({ isShowInfoWindow }) => (e) => ({
                isShowInfoWindow: true
            }),
        onInfoCloseClick : ({ isShowInfoWindow }) => (e) => ({
            isShowInfoWindow:false
        }),
        options: {function (maps) { return { mapTypeId: "satellite" } }}
    }),
    withScriptjs,
    withGoogleMap
)
(props =>
    <GoogleMap
        defaultZoom={props.defaultZoom}
        defaultCenter={{ lat: props.content.latitude ? props.content.latitude : 0, lng: props.content.longitude ? props.content.longitude: 0}}
        //onClick={props.onMapClick}
        mapTypeId={props.mapTypeId}
    >
        {props.isMarkerShown && <Marker position={props.markerPosition} onClick={props.onMarkerClick}>

            {props.isShowInfoWindow &&  !props.disableOnMarkerClick &&
            <InfoWindow
                onCloseClick={props.onInfoCloseClick}
                key={`infowindow-${'id'}`}
                options={{
                    alignBottom: true,
                    pane: 'mapPane',
                    boxStyle: {
                        width: '800px'
                    }}}
                visible={true}>
                {/*<div style={{maxWidth : 800, width : 500}}>*/}
                    <div style={{maxWidth : 400, width : 300}}>
                        <div className='row ml-3 mr-3'>
                            <h6 className='col-md-8'>
                                {props.content.type}
                            </h6>
                            <h6 className='col-md-4 text-right'><span className='badge badge-success'>{props.content.status}</span>
                            </h6>
                    </div>
                    <div className='row ml-3 mr-3'>
                        <b className='col-md-12'>
                            category : {props.content.category}
                        </b>
                    </div>
                        <div className='row ml-3 mr-3'>
                            <b className='col-md-12'>
                               user : {props.content.category}
                            </b>
                        </div>
                </div>

            </InfoWindow>
            }
        </Marker>
            }


    </GoogleMap>
)

const MapContainer  = (props)=> {

        const apiKey = props.apiKey || "AIzaSyC052ouc29GFiZfjpUxJ9-XUBW-ltoGvC8"

        return (
            <div style={{ height: '100%' }}>
                <Map
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: '100%' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    content = {props.content}
                    defaultZoom={props.defaultZoom || 12}
                    mapTypeId={props.mapTypeId || "terrain"}
                    disableOnMarkerClick={props.disableOnMarkerClick}
                />
            </div>
        )

}
export default MapContainer
