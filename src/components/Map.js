import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {
  render() {
  const GoogleMapExample = withGoogleMap(props => (
     <GoogleMap
       defaultCenter = { { lat: 40.640063, lng: 22.94419 } }
       defaultZoom = { 13 }
     >
     </GoogleMap>
  ));
  return(
     <div className="map" id="map_container">
       <GoogleMapExample
         containerElement={ <div style={{ height: `100%`, width: '100%' }} /> }
         mapElement={ <div style={{ height: `100%` }} /> }
       />
     </div>
  );
  }
};

export default Map