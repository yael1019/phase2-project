import React from 'react'

function CarForm() {
  return (
    
        <form id='carForm'>
            <input type='text' placeholder='make'/>
            <input type='text' placeholder='model'/>
            <br></br>
            <input type='number' placeholder='year'/>
            <input type='text'placeholder='image'/>
            <br></br>
            <input type='text'placeholder='cost'/>
            <input type='number'placeholder='horsepower' />
            <br></br>
            <textarea className='textArea' placeholder='Info'></textarea>
        </form>
   
  )
}

export default CarForm