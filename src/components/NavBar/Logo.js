import React from 'react'

// importing our own
import Emoji from '../Emoji/Emoji'

export default function Logo() {
  return (
    <span style={style.title}>
          <b style={style.text}>Type</b>
          <Emoji symbol="🐙" label="octopus"/>
    </span>
  )
}

const style ={
    title: {
      border: '5px solid white',
      textDecoration: 'none',
      color: '#ffffff',
      fontSize: 50,
      padding: 10,
    },
    text: {
      marginRight: '1%',
    },
}