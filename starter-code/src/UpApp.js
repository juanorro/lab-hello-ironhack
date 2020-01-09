import React, { Component } from 'react';
import NavBar from './NavBar';
import TextData from './TextData';
import ButtonAw from './ButtonAw';
import './UpApp.css';

class UpApp extends Component {
  render() {
    return (
      <div className="UpApp">
        <NavBar/>
        <TextData/>
        <ButtonAw/>
      </div>
    )
  }
}

export default UpApp