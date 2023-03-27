import React from 'react'
import CarCard from './CarCard';
import { motion, Variants } from 'framer-motion'

function Specs({ cars }) {
  const carsDisplay = cars.map(car => <CarCard key={car.id} car={car} />)
  return (
    <div>
      <h1>Specs</h1>
      <div className='specs'>
        {carsDisplay}
      </div>
    </div>
  )
}

export default Specs