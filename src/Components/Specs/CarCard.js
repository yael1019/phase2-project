import React from 'react'
import { motion, Variants } from 'framer-motion'

const imageAnimate = {
  offScreen: {
    x: -100,
    opacity: 0
  },
  onScreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      type: 'spring',
      bounce: 0.8
    }
  }
}

const textAnimate = {
  offScreen: {
    y: -100,
    opacity: 0
  },
  onScreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: 'spring',
      bounce: 0.4
    }
  }
}

const textAnimate2 = {
  offScreen: {
    y: 100,
    opacity: 0
  },
  onScreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: 'spring',
      bounce: 0.4
    }
  }
}

function CarCard({ car }) {
  return (
    <motion.div
      class='car-card'
      initial={'offScreen'}
      whileInView={'onScreen'}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.3 }}
    >
      <motion.h2
        // initial={'offScreen'}
        // animate={'onScreen'}
        variants={textAnimate}
      >
        {car.make}
      </motion.h2>

      <motion.img
        src={car.image[0]}
        alt="Car"
        variants={imageAnimate}
      />
      <div>
        <motion.h3
          variants={textAnimate2}
        >
          Model: {car.model}
        </motion.h3>
        <motion.h3
          variants={textAnimate2}
        >
          Year: {car.year}
        </motion.h3>
        <motion.h3
          variants={textAnimate2}
        >
          ${car.cost}
        </motion.h3>
        <motion.h3
          variants={textAnimate2}
        >
          HP: {car.hp}
        </motion.h3>
      </div >
    </motion.div>
  )
}

export default CarCard