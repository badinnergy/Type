import React, { Component } from 'react'

// importing our own
import Logo from './Logo'

export class NavBar extends Component {
  render() {
    return (
      <div className="navContainer">
        <Logo />
      </div>
    )
  }
}

export default NavBar
