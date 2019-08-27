import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// importing our own
import NavBar from './NavBar'
import HomePage from './HomePage'
import HalamanUtama from './HalamanUtama'
import ClassicPage from './ClassicPage'
import TimedPage from './TimedPage'
import HalamanKlasik from './HalamanKlasik'
import HalamanBermasa from './HalamanBermasa'

// CSS
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />

        <Route path='/' exact component={HomePage} />
        <Route path='/malay' exact component={HalamanUtama} />
        <Route path='/classic' component={ClassicPage} />
        <Route path='/timed' component={TimedPage} />
        <Route path='/malay/klasik' component={HalamanKlasik} />
        <Route path='/malay/bermasa' component={HalamanBermasa} />
      </div>
    </BrowserRouter>
  );
}

export default App;
