import React, { useState, useEffect } from "react";
import Homepage from './Homepage';
import Navbar from "./Navbar";
import NoMatch from './NoMatch';
import Specs from "./Specs";
import LogIn from "./LogIn/LogIn";
import CompareTrack from "./CompareTrack";


import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    username: '',
    password: ''
  })
  const [driverMode, setDriverMode] = useState(false);
  const [user, setUser] = useState({})

  useEffect(() => {
      fetch('http://localhost:3001/users')
          .then(resp => resp.json())
          .then(data => setUser(data))
  }, [])

  function handleModeClick() {
    setDriverMode(!driverMode)
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then(resp => resp.json())
      .then(obj => setUser(obj))
    setForm({
      username: '',
      password: ''
    })
    navigate('/')
  }
  
  return (
    <div className={driverMode ? "App driver" : 'App car'}>
      
      <Navbar />

      <Routes>
        <Route path="/" element={ <Homepage handleModeClick={handleModeClick} user={ user } setUser={ setUser } /> } />
        <Route path="login" element={ <LogIn form={ form } setForm={ setForm } handleSubmit={ handleSubmit } /> } />
        <Route path="*" element={ <NoMatch /> } />
        <Route path="specs" element= {<Specs/>} />
        <Route path="compare-track" element= {<CompareTrack/>} />

      </Routes>
    </div>
  );
}

export default App;
