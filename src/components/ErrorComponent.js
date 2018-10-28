import React, { Component } from 'react';

// Error Boundaries, Code base from https://reactjs.org/docs/error-boundaries.html 


class ErrorComponent extends Component {
    state = { hasError: false };
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
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