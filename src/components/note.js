{props.isMarkerShown && <Marker position={{ lat: 40.640063, lng: 22.94419  }} />}

props.gyms.map((gym)=>{
    props.isMarkerShown &&
    <Marker
        key={gym.venue.id}
        position={gym.venue.location}
    />
})