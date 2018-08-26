import React, { Component } from 'react';
import Header from "./components/Header";
import Sidemenu from "./components/Sidemenu";
import Footer from "./components/Footer";
import './App.css';
import Map from './components/Map.js'



class App extends Component {

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
          <section className="list" id="list">
            <ol>
              <li>This is a list</li>
            </ol>
          </section>
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
