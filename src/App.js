//import logo from './logo.svg';
import './App.css';
//import React from 'react';
import React, { Component } from "react";

//import Student from './containers/students'
import Student from './students'


class App extends Component {
  render(){
    return (
      <div className="App">
        <Student/>
      </div>
    );
  }
  }

export default App;
