import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// importing from Material UI
import Button from '@material-ui/core/Button'

export class HomePage extends Component {
  render() {
    return (
      <div style={style.container}>
        <h1 style={style.title}>Welcome!</h1>
        <h3 style={style.text}>Press Play! to start the game</h3>
        <Button variant="contained" color="primary" component={Link} to='/play'>Play!</Button>
      </div>
    )
  }
}

const style ={
    container: {
      textAlign: 'center',
      margin: 40,
    },
    title: {
      margin: 20,
      color: '#3f51b5',
    },
    text: {
      marginBottom: '5%',
    }
}

export default HomePage
