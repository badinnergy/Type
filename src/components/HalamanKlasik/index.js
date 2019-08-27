import React, { Component } from 'react'

// importing our own
import Klasik from './Klasik'

export class HalamanKlasik extends Component {
  constructor(props) {
    super(props)
    
    const pathname = this.props.location;
    console.log(pathname)
  }
  
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
