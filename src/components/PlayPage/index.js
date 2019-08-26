import React, { Component } from 'react'

// importing our own
import Play from './Play'

export class PlayPage extends Component {
  render() {
    return (
      <div className="container indexPlayPageContainer">
        <h1 className="indexPlayPageTitle">Play!</h1>
        <Play />
      </div>
    )
  }
}

export default PlayPage
