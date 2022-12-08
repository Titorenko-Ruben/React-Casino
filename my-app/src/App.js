import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from "pages/Home/Home";
import SponsorEverton from "pages/SponsorEverton/SponsorEverton";
import SponsorWatford from "pages/SponsorWatford/SponsorWatford";
import SponsorDrake from "pages/SponsorDrake/SponsorDrake";
import Settings from "pages/Settings/Settings";
import Pay from 'pages/Pay/Pay'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsorships/everton" element ={<SponsorEverton />} />
          <Route path="/sponsorships/watford" element ={<SponsorWatford />} />
          <Route path="/sponsorships/drake" element ={<SponsorDrake />} />
          <Route path="/settings/general" element ={<Settings/>} />
          <Route path='/pay' element={<Pay />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
