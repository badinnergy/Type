import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// importing our own
import Play from './Play'

// importing from Material UI
import Button from '@material-ui/core/Button'

export class PlayPage extends Component {
  render() {
    return (
      <div style={style.container}>
        <h1 style={style.title}>Play!</h1>
        {/* <h3 style={style.text}>Press Enter when you're done typing</h3> */}
        <Play />
        <Button variant='contained' component={Link} to='/' style={style.button} color='primary'>Home</Button>
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
        margin: 20,
    },
    button: {
        position: 'fixed',
        bottom: '25%',
        right: '48%',
    },
}

export default PlayPage
