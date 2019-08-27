import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// importing from Material UI
import Button from '@material-ui/core/Button'

class HalamanUtama extends Component {
  render() {
    return (
      <div className="homepageContainer">
        <h1 className="homepageTitle">Selamat Datang!</h1>
        <h3>Pilih satu mod</h3>
        <h3 className="homepageText">untuk mula main</h3>
        <Button className="playButtons" variant="contained" color="primary" component={Link} to='/malay/klasik'>Klasik</Button>
        <br />
        <small>Relax saja ~</small>
        <br />
        <br />
        <Button className="playButtons" variant="contained" color="secondary" component={Link} to='/malay/bermasa'>Bermasa</Button>
        <br />
        <small>Mahukan cabaran?</small>
        <br />
        <br />
        <Button className="playButtons" variant="contained" color="primary" component={Link} to='/'>Inggeris</Button>
        <br />
        <small>Belajar perkataan Inggeris.</small>
      </div>
    )
  }
}

export default HalamanUtama
