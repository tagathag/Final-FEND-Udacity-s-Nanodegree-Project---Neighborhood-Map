import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = withGoogleMap(props => (
  <GoogleMap
    defaultCenter = { { lat: 40.640063, lng: 22.94419 } }
    defaultZoom = { 13 }
  >
    {props.gyms.map((gym)=>{
      return props.isMarkerShown &&
      <Marker
          key={gym.venue.id}
          position={gym.venue.location}
      />
    })}
  </GoogleMap>
));


export default Map


