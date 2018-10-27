import React, {Component} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps"
import {compose, withStateHandlers } from "recompose"


const mapEnvironment = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)

const mapLayout = props => (
  <GoogleMap
    defaultCenter = { { lat: 40.640063, lng: 22.94419 } }
    defaultZoom = { 13 }
  >
    {props.gyms.map((gym)=>{
      return props.isMarkerShown &&
        <Marker
          key={gym.venue.id}
          position={gym.venue.location}
          animation={window.google.maps.Animation.DROP}
          onClick={()=>{
            props.showGymInfo(gym.venue.id)
          }}
        >
          {gym.venue.id === props.activeGym && 
          <InfoWindow onCloseClick={props.onToggleOpen}>
            <div className="details-window">tasos</div>
          </InfoWindow>}
        </Marker>
    })}
  </GoogleMap>
)

const Map = mapEnvironment(mapLayout)


export default Map;


