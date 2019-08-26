import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// importing from Material UI
import Button from '@material-ui/core/Button'

export class HomePage extends Component {
  render() {
    return (
      <div className="homepageContainer">
        <h1 className="homepageTitle">Welcome!</h1>
        <h3 className="homepageText">Press Play! to start the game</h3>
        <Button variant="contained" color="primary" component={Link} to='/play'>Play!</Button>
      </div>
    )
  }
}

export default HomePage
