import React, { useState } from "react";
import Homepage from './Homepage';
import Navbar from "./Navbar";
import NoMatch from './NoMatch';
import LogIn from "./LogIn/LogIn";
import { Routes, Route } from 'react-router-dom';

function App() {
  const [driverMode, setDriverMode] = useState(false);

  function handleModeClick() {
    setDriverMode(!driverMode)
  }
  
  return (
    <div className={driverMode ? "App driver" : 'App car'}>
      
      <Navbar />

      <Routes>
        <Route path="/" element={ <Homepage handleModeClick={handleModeClick} /> } />
        <Route path="login" element={ <LogIn /> } />
        <Route path="*" element={ <NoMatch /> } />
      </Routes>
    </div>
  );
}

export default App;
