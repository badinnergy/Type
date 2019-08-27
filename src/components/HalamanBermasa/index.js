import React, { Component } from 'react'

// importing our own
import Bermasa from './Bermasa'

class HalamanBermasa extends Component {
  constructor(props) {
    super(props)
    
    const pathname = this.props.location;
    console.log(pathname)
  }
  
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
