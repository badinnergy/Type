import React, { Component } from 'react'

// importing our own
import Logo from './Logo'

export class NavBar extends Component {
  render() {
    return (
      <div style={style.container}>
        <Logo />
      </div>
    )
  }
}

const style ={
    container: {
      backgroundColor: '#05cae0',
      textAlign: 'center',
      padding: '1%',
    },
}

export default NavBar
