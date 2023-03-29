import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

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

  // function handlePlay() {
  //   let audio = new Audio()
  //   audio.play();
  // }

  return (
    <div>
      <h1>{carObj.make}</h1>
      <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {images}
      </section>
      {/* <button id='play' onClick={ handlePlay }>Play</button> */}
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