import React, { Component } from 'react';
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";
import Sidemenu from "./Sidemenu";
import Map from "./Map"

class Main extends Component {

    // this is the state of our APP
    state = {
        gyms : [],
        shownGyms : [],
        activeGym : null,
        bounce : false,
        zoom : 14,
        latitude : 40.640063,
        longtitude : 22.94419,
        query : ""
    }

    
    // We fetch the data when the component is mounted by invoking the "getGyms()" function
    componentDidMount() {
        this.getGyms();
        console.log(this.state.haserror);
    }
    
    // function for fetching data from foursquare API
    getGyms = () => {
        const starterUrl = "https://api.foursquare.com/v2/venues/explore?"
        const params = {
          client_id: "E2JSELCAMXDB1GHPPXSXRG2ICZYTIYZME1MJYOPDIJSZAPUB",
          client_secret: "ESLKD2RQE3IFYXR5HA3SSINURL1ICVSFHKWAX5FXBVOW4IZR",
          query: "gyms",
          ll: "40.640063,22.94419",
          v: "20181808",
          limit: 50,
          radius: 2000
        }
    
        fetch(starterUrl + new URLSearchParams(params))
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(data => {
          console.log(data.response.groups[0].items);
          this.setState({
            gyms : data.response.groups[0].items,
            shownGyms : data.response.groups[0].items,
            activeGym : data.response.groups[0].items[0]
          });
        })
        .then( () => {
          console.log("hello");
          console.log(this.state.shownGyms);
        })
        .catch(error => {
          alert(`Sorry, we cannot fetch data from Foursquare`);
          console.log("The erros is " + error);
        })
    }

    // function that updates the "query" property of the state. It also updates the gyms that are shown 
    // in the list when the user searches for them
    updateQuery = (query)=>{
        this.setState({query: query.trim()})
      
        if (query){
            const match=new RegExp(escapeRegExp(query),"i");
            this.setState({
                shownGyms: this.state.gyms.filter((gym)=>match.test(gym.venue.name)) 
            })     
        }else{
            this.setState({
                shownGyms: this.state.gyms
            })
        }    
    }


    // Function that changes the state propery "activeGym". In the "activeGym" property
    // we put the id of the gym whom marker was clicked. Also starts and stops the bouncing animation
    // of the Markers
    showGymInfo = (activeGym, bounce) => {
        this.setState({
            activeGym : activeGym,
            bounce : bounce
            }
        )   
    }


    render(){
        return(
            <div className="main-container">
                <Sidemenu
                    query={this.state.query}
                    updateQuery={this.updateQuery}
                    shownGyms={this.state.shownGyms}
                    showGymInfo={this.showGymInfo} 
                />
                <Map
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAA9GX2fVHjxTsDtW1_Lk_v6zgoMNwhZBY&v=3.exp&libraries=geometry,drawing,places"
                    gyms={this.state.shownGyms} 
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={ <div className="map" id="map_container" /> }
                    mapElement={ <div style={{ height: `100%` }} /> } 
                    isMarkerShown={true}   
                    showGymInfo={this.showGymInfo}   
                    activeGym={this.state.activeGym}
                    bounce={this.state.bounce} 
                    stopBounce={this.stopBounce}    
                />
            </div>
        )
    }
}

export default Main;