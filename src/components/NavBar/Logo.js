import React from 'react'

// importing our own
import Emoji from '../Emoji/Emoji'

export default function Logo() {
  return (
    <span className="logoTitle">
          <b className="logoText">Taip</b>
          <Emoji symbol="🐙" label="octopus"/>
    </span>
  )
}