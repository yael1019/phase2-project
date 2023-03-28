import React, { useState, useEffect } from "react";
import Homepage from './Homepage';
import Navbar from "./Navbar";
import NoMatch from './NoMatch';
import Specs from "./Specs/Specs";
import LogIn from "./LogIn/LogIn";
import CompareTrack from "./CompareTrack";
import CarForm from "./CarForm/CarForm";


import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    username: '',
    password: ''
  })
  const [user, setUser] = useState({})
  const [cars, setCars] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3001/users')
          .then(resp => resp.json())
          .then(data => setUser(data))
  }, [])


  useEffect(()=> {
    fetch("http://localhost:3001/Cars")
    .then(response => response.json())
    .then(data => setCars(data))
  },[])

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
    <div>
      
      <Navbar />

      <Routes>
        <Route path="/" element={ <Homepage user={ user } setUser={ setUser } /> } />
        <Route path="login" element={ <LogIn form={ form } setForm={ setForm } handleSubmit={ handleSubmit } /> } />
        <Route path="*" element={ <NoMatch /> } />        
        <Route path="compare-track" element= {<CompareTrack cars={cars}/>} />
        <Route path="specs" element= {<Specs cars={ cars } />} />
        <Route path="add-car" element={<CarForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
