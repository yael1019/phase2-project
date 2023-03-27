import React, { useState, useEffect } from "react";
import Homepage from './Homepage';
import Navbar from "./Navbar";
import NoMatch from './NoMatch';
import LogIn from "./LogIn/LogIn";
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    username: '',
    password: ''
  })
  const [driverMode, setDriverMode] = useState(false);
  const [users, setUsers] = useState([])

  useEffect(() => {
      fetch('http://localhost:3001/users')
          .then(resp => resp.json())
          .then(data => setUsers(data))
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
        <Route path="/" element={ <Homepage handleModeClick={handleModeClick} /> } />
        <Route path="login" element={ <LogIn form={ form } setForm={ setForm } handleSubmit={ handleSubmit } /> } />
        <Route path="*" element={ <NoMatch /> } />
      </Routes>
    </div>
  );
}

export default App;
