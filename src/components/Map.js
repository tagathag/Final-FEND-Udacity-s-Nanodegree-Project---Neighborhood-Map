import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps"
import {compose} from "recompose"


const mapEnvironment = compose(
  withScriptjs,
  withGoogleMap
)

//Code based on the documentation of react-google-maps https://tomchentw.github.io/react-google-maps/

const mapLayout = props => (
  <GoogleMap
    defaultCenter = { { lat: 40.640063, lng: 22.94419 } }
    zoom = { props.zoom }
    center={{ lat: props.latitude, lng: props.longtitude }}
  >
    {props.gyms.map((gym)=>{
      return props.isMarkerShown &&
        <Marker
          key={gym.venue.id}
          position={gym.venue.location}
          animation={gym.venue.id === props.activeGym && props.bounce ? window.google.maps.Animation.BOUNCE : window.google.maps.Animation.DROP }
          onClick={()=>{
            props.showGymInfo(gym.venue, true)
          }}
        >
          {gym.venue.id === props.activeGym && 
          <InfoWindow onCloseClick={()=> {
            props.showGymInfo(gym.venue, false)
          }}>
            <div className="details-window">{"The address of the "+gym.venue.name+" is "+gym.venue.location.address}</div>
          </InfoWindow>}
        </Marker>
    })}
  </GoogleMap>
)

const Map = mapEnvironment(mapLayout)


export default Map;


