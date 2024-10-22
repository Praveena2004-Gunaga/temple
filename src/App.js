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
import Contact from './components/Contact'
import Schedule from './components/Schedule'
import Spritiual from './components/Spritiual'
import Deity from './components/Deity'
import Architecture from './components/Architecture'
import Navratri_habba from './components/festival_cards/Navratri_habba'
import Navchandi_habba from './components/festival_cards/Navchandi_habba'
import Bhandi_habba from './components/festival_cards/Bhandi_habba'
import Huvina_habba from './components/festival_cards/Huvina_habba'
import Nopi from './components/festival_cards/Nopi'
import Gadi from './components/festival_cards/Gadi'
import Kumkumarchane from './components/festival_cards/Kumkumarchane'
import History from './components/History'
import Event_Chaturdasi from './components/special_events/Event_Chaturdasi'
import Event_Utsav from './components/special_events/Event_Utsav'
import Event_bandihabba from './components/special_events/Event_bandihabba'
import Event_gadi from './components/special_events/Event_gadi'
import Event_kumkumarchane from './components/special_events/Event_kumkumarchane'
import Event_navratri from './components/special_events/Event_navratri'
import Footer from './components/Footer'
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
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/schedule" element={<Schedule/>} />
            <Route exact path="/spritiual" element={<Spritiual/>} />
            <Route exact path="/deity" element={<Deity/>} />
            <Route exact path="/architecture" element={<Architecture/>} />
           <Route exact path="/navratri" element={<Navratri_habba/>} />
            <Route exact path="/navchandi" element={<Navchandi_habba/>} />
            <Route exact path="/bandi" element={<Bhandi_habba/>} />
            <Route exact path="/huvinapooje" element={<Huvina_habba/>} /> 
            <Route exact path="/nopi" element={<Nopi/>} /> 
            <Route exact path="/gadi" element={<Gadi/>} /> 
            <Route exact path="/kumkumarchane" element={<Kumkumarchane/>} />
            <Route exact path="/history" element={<History/>} />
            <Route exact path="/event1" element={<Event_Chaturdasi/>} />
            <Route exact path="/event2" element={<Event_Utsav/>} />
            <Route exact path="/event3" element={<Event_bandihabba/>} />
            <Route exact path="/event4" element={<Event_gadi/>} />
            <Route exact path="/event5" element={<Event_kumkumarchane/>} />
            <Route exact path="/event6" element={<Event_navratri/>} />
          </Routes>
      </Router>
      {/* <Navbar/>
      <Location/>
      <About/> */}
      {/* <Footer></Footer> */}
    </div>
  )
}

export default App
