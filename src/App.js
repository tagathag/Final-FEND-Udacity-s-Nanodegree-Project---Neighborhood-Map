import React, { Component } from 'react';
import Header from "./components/Header";
import Sidemenu from "./components/Sidemenu";
import Footer from "./components/Footer";
import './App.css';
import Map from './components/Map.js'



class App extends Component {

  state = {
    gyms : [],
    zoom : 14,
    latitude : 40.640063,
    longtitude : 22.94419,
    query : "",
    showGyms : []
  }

  componentDidMount() {
    this.getGyms();
  }

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
        showGyms : data.response.groups[0].items
      });
    })
    .then( () => {
      console.log("hello");
      console.log(this.state.gyms);
    })
    .catch(error => {
      alert(`Sorry, we cannot fetch data from Foursquare`);
      console.log("Foursquare error! " + error);
    })
  }

  onMenuClick = (event) => {
    const listPlaces = document.getElementById("list");
    const map_container = document.getElementById("map_container");
    listPlaces.classList.toggle("hide");
    map_container.classList.toggle("full-width");
    
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">  
          <a id="menu" className="header__menu" onClick = {(event)=>this.onMenuClick(event)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"/>
            </svg>
          </a>
          <h1 className="App-title">Find your Gym</h1>
        </header>
        <div className="main-container">
          <aside className="Sidebar">
            <section className="Search-field">
              <input className="Search-field-input" type="text" placeholder="Filter location"/>
            </section>
            <section className="list" id="list">
              <ol>
                <li>This is a list</li>
              </ol>
            </section>
          </aside>
          <Map/>
        </div>
        <footer>
            <h1 className="footer-title">This is the footer</h1>
        </footer>
      </div>
    );
  }
}

export default App;
