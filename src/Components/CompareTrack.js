import React,{useState} from 'react'
import {motion} from 'framer-motion'
import TrackCard from './TrackCard'

function CompareTrack({cars}) {
  const [race, setRace]=useState(false)
  const mappedTrack = cars.map(car => {
  return <TrackCard key={car.id} 
    car={car} 
    handleRace={handleRace} 
    race={race}/>})
  function handleRace() {
    setRace(!race)
  }
  return (
    <div className='compareTrack'>
      <h1>CompareTrack</h1> 
      <br></br>
      <motion.button 
      whileHover={{
        scale: 1.1,
        boxShadow: '0px 0px 8px rgb(255, 255, 255)'
    }}
      id="raceBtn" 
      onClick={handleRace}>Race</motion.button>
      {mappedTrack}

    </div>

  )
}

export default CompareTrack