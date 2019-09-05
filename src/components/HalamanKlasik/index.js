import React, { Component } from 'react'

// importing our own
import Klasik from './Klasik'

export class HalamanKlasik extends Component {
  render() {
    return (
      <div className="container indexPlayPageContainer">
        <h1 className="indexPlayPageTitle">Mula!</h1>
        <Klasik />
      </div>
    )
  }
}

export default HalamanKlasik
