import React, { Component } from 'react'

// importing our own
import Bermasa from './Bermasa'

class HalamanBermasa extends Component {
  render() {
    return (
      <div className="container indexPlayPageContainer">
        <h1 className="indexPlayPageTitle">Mula!</h1>
        <Bermasa />
      </div>
    )
  }
}

export default HalamanBermasa
