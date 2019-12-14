import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Facebook from '../src/modules/Login/components/LoginWithFb'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Facebook />
      </div>
    );
  }
}

export default App;
