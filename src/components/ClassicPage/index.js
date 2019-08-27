import React, { Component } from 'react'

// importing our own
import Classic from './Classic'

export class ClassicPage extends Component {
  render() {
    return (
      <div className="container indexPlayPageContainer">
        <h1 className="indexPlayPageTitle">Go!</h1>
        <Classic />
      </div>
    )
  }
}

export default ClassicPage
