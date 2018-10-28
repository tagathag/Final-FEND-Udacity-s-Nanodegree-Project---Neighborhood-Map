import React, { Component } from 'react';
import './App.css';
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorComponent from "./components/ErrorComponent";


class App extends Component {

  render() {
    return (
      <div className="App">
        <ErrorComponent>
          <Header/>
          <Main/>
          <Footer/>
        </ErrorComponent>
      </div>
    );
  }
}

export default App;
