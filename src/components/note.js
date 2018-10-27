const Map = compose(
     withScriptjs,
     withGoogleMap,
     (props => (
    <GoogleMap
      defaultCenter = { { lat: 40.640063, lng: 22.94419 } }
      defaultZoom = { 13 }
    >
      {props.gyms.map((gym)=>{
        return props.isMarkerShown &&
        <Marker
            key={gym.venue.id}
            position={gym.venue.location}
            // animation={}
        />
      })}
    </GoogleMap>
  )))

// Markers animation
// helped from https://stackoverflow.com/questions/43714895/google-is-not-defined-in-react-app-using-create-react-app



