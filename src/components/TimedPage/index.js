import React, { Component } from 'react'

// importing our own
import Timed from './Timed'

export class TimedPage extends Component {
  render() {
    return (
      <div className="container indexPlayPageContainer">
        <h1 className="indexPlayPageTitle">Go!</h1>
        <Timed />
      </div>
    )
  }
}

export default TimedPage
