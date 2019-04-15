import React, { Component } from 'react';
import './App.css';
import Matrix from './Matrix';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Matrix />
        </header>
      </div>
    );
  }
}

export default App;