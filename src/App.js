import React, { Component } from 'react';
import './App.css';
import Matrice from './Matrix';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Matrice />
        </header>
      </div>
    );
  }
}

export default App;