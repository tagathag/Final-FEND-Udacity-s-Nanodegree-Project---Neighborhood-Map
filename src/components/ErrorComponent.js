import React, { Component } from 'react';

// Error Boundaries, Code base from https://reactjs.org/docs/error-boundaries.html 


class ErrorComponent extends Component {
    state = { hasError: false };
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    componentDidMount() {
      // Handle Map Errors
      window.gm_authFailure = () => {
        alert("Error in loading google map");
        document.querySelector(
          ".map"
        ).innerHTML = `<section><h1 aria label="message for authentication error">Sorry,there was an authentication failure. Check whether your API key is invalid <h1/></section>`;
      }
    }
  
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }


  export default ErrorComponent;