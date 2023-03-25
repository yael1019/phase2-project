import React from 'react'

function Homepage({ handleModeClick }) {
  return (
    <div>
        <button>Log In</button>
        <button id='change-img-btn' onClick={ handleModeClick }>Driver's Seat Mode</button>
        <h1>Exotic Garage</h1>
        {/* <img id="homepage-img" src='https://cdnb.artstation.com/p/assets/images/images/031/801/623/large/felippe-carballo-render1.jpg?1604620213' alt='car wheel' /> */}
    </div>
  )
}

export default Homepage