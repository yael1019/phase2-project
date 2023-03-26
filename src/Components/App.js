import React, { useState } from "react";
import Homepage from './Homepage';
import Navbar from "./Navbar";

function App() {
  const [driverMode, setDriverMode] = useState(false);
  const [toggleHamburger, setToggleHamburger] = useState(false);
  function handleModeClick() {
    setDriverMode(!driverMode)
  }
  function handleHamburger() {
    setToggleHamburger(!toggleHamburger)
  }
  return (
    <div className={driverMode ? "App driver" : 'App car'}>
      
      <div onClick={handleHamburger}>
      <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Navbar />
      <Homepage handleModeClick={handleModeClick} />
    </div>
  );
}

export default App;
