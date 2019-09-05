import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// importing from Material UI
import Button from '@material-ui/core/Button'

class HomePage extends Component {
  render() {
    return (
      <div className="homepageContainer">
        <h1 className="homepageTitle">Welcome!</h1>
        <h3>Choose any mode</h3>
        <h3 className="homepageText">to start the game</h3>
        <Button className="playButtons" variant="contained" color="primary" component={Link} to='/classic'>Classic</Button>
        <br />
        <small>No time - no pressure!</small>
        <br />
        <br />
        <Button className="playButtons" variant="contained" color="secondary" component={Link} to='/timed' disabled>Timed</Button>
        <br />
        <small>COMING SOON!?</small>
        <br />
        <br />
        <Button className="playButtons" variant="contained" color="primary" component={Link} to='/malay'>Malay</Button>
        <br />
        <small>Learn some Malay words.</small>
      </div>
    )
  }
}

export default HomePage
