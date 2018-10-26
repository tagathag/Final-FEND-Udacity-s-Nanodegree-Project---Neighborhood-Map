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
        zoom : 14,
        latitude : 40.640063,
        longtitude : 22.94419,
        query : ""
    }

    
    // We fetch the data when the component is mounted by invoking the "getGyms()" function
    componentDidMount() {
        this.getGyms();
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
          limit: 10,
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
            shownGyms : data.response.groups[0].items
          });
        })
        .then( () => {
          console.log("hello");
          console.log(this.state.shownGyms);
        })
        .catch(error => {
          alert(`Sorry, we cannot fetch data from Foursquare`);
          console.log("Foursquare error! " + error);
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

    render(){
        return(
            <div className="main-container">
                <Sidemenu
                    query={this.state.query}
                    updateQuery={this.updateQuery}
                    shownGyms={this.state.shownGyms}
                />
                <Map/>
            </div>
        )
    }
}

export default Main;