import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'
import acuraNSX from '../Assets/acuraNSX.mp3'
import audir8 from '../Assets/audir8.mp3'
import bugatti from '../Assets/bugatti.mp3'
import corvette from '../Assets/corvette.mp3'
import escaladeV from '../Assets/escaladeV.mp3'
import lamboAventador from '../Assets/lamboAventador.mp3'
import lamboUrus from '../Assets/lamboUrus.mp3'
import porsche from '../Assets/porsche.mp3'

function CarPage() {
  const [carObj, setCarObj] = useState({
    image: []
  })
  const [current, setCurrent] = useState(0)
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/Cars/${params.id}`)
      .then(resp => resp.json())
      .then(data => setCarObj(data))
  }, [])

  const length = carObj.image.length;

  if (!Array.isArray(carObj.image) || length <= 0) {
    return null
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const images = carObj.image.map((pic, i) => {
    return (
      <div className={i === current ? 'slide active' : 'slide'} key={pic}>
        {
          i === current && (<img src={pic} alt='car image' className='image' />)
        }
      </div>
    )
  })

  function handlePlay() {
    let audio;
    if (carObj.model === "R8 V10 quatro") {
      audio = new Audio(audir8);
    }
    else if (carObj.model === "W16 Mistral roadster") {
      audio = new Audio(bugatti);
    }
    else if (carObj.model === "NSX Type S") {
      audio = new Audio(acuraNSX);
    }
    else if (carObj.model === "Urus Performante") {
      audio = new Audio(lamboUrus);
    }
    else if (carObj.model === "911 GT3 RS") {
      audio = new Audio(porsche);
    }
    else if (carObj.model === "Escalade V") {
      audio = new Audio(escaladeV);
    }
    else if (carObj.model === "Aventador LP 780-4 Ultimate") {
      audio = new Audio(lamboAventador);
    }
    else if (carObj.model === "Corvette Z06") {
      audio = new Audio(corvette);
    } else {
      return null
    }
    audio.play();
  }

  return (
    <div>
      <h1>{carObj.make}</h1>
      <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {images}
      </section>
      <motion.button
        id='play'
        onClick={handlePlay}
        whileHover={{
          scale: 1.1,
          boxShadow: '0px 0px 8px rgb(255, 255, 255)'
        }}
      >
        Engine
      </motion.button>
      <div className='car-pg-h3'>
        <h3>Model: {carObj.model}</h3>
        <h3>Year: {carObj.year}</h3>
        <h3>Cost: ${carObj.cost}</h3>
        <h3>HP: {carObj.hp}</h3>
        <h3>Vehicle Information:</h3>
        <h3>{carObj.info}</h3>
      </div>
    </div>
  )
}

export default CarPage