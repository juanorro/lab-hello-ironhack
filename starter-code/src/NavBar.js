import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <img src="/images/ironhack-logo.svg"/>
        <img src="/images/menu-top.svg"/>
      </div>
    )
  }
}

export default NavBar