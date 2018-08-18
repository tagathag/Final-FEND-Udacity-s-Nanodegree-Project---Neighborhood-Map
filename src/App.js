import React, { Component } from 'react';
import Header from "./components/Header";
import Sidemenu from "./components/Sidemenu";
import Footer from "./components/Footer";
import './App.css';
import Map from './components/Map.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">  
          <a id="menu" className="header__menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"/>
            </svg>
          </a>
          <h1 className="App-title">Find your Gym</h1>
        </header>
        <div className="main-container">
          <section className="list">
            <ol>
              <li>This is a list</li>
            </ol>
          </section>
          <Map/>
        </div>
        <footer>
            <h1>Find your Gym</h1>
        </footer>
      </div>
    );
  }
}

export default App;
