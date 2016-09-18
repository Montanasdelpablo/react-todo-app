import React, { Component } from 'react';
import AppHeader from './components/AppHeader.js';
import AppBody from './components/AppBody.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        
        <AppBody />
      </div>
    );
  }
}

export default App;
