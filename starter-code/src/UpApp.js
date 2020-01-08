import React, { Component } from 'react';
import NavBar from './NavBar';
import ButtonAw from './ButtonAw';
import './UpApp.css';

class UpApp extends Component {
  render() {
    return (
      <div className="UpApp">
        <NavBar/>
        <Text/>
        <ButtonAw/>
      </div>
    )
  }
}

export default UpApp