import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <img className="logo" src="/images/ironhack-logo.svg"/>
        <img className="menu" src="/images/menu-top.svg"/>
      </div>
    )
  }
}

export default NavBar