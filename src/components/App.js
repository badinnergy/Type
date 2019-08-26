import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// importing our own
import NavBar from './NavBar'
import HomePage from './HomePage'
import PlayPage from './PlayPage'

// CSS
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />

        <Route path='/' exact component={HomePage} />
        <Route path='/play' component={PlayPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
