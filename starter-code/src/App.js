import React, { Component } from 'react';
import UpApp from './UpApp';
import FeatureList from './FeatureList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UpApp/>
        <FeatureList/>
      </div>
    )
  }
}

export default App