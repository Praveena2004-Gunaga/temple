import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Location from './components/Location'
import Back from './components/Back'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Events from './components/Events'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
       
          <Routes>
          <Route exact path="/" element={<Back />} />
            <Route exact path="/location" element={<Location />} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/events" element={<Events/>} />
          </Routes>
      </Router>
      {/* <Navbar/>
      <Location/>
      <About/> */}
      
    </div>
  )
}

export default App
