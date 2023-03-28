import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const variants = {
  open: {
    opacity: 1,
    x: 0
  },
  closed: {
    opacity: 0,
    x: '-100%'
  }
}

function Navbar() {
  const [clickBurger, setClickBurger] = useState(false);

  return (
    <div>
      {/* HAMBURGER */}
      <motion.button
        className='hamburger'
        onClick={() => setClickBurger(!clickBurger)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {
          clickBurger
            ?
            <CloseIcon />
            :
            <MenuIcon />
        }
      </motion.button>

      {/* NAV LINKS */}
      <motion.nav
        id='menu'
        animate={clickBurger ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <motion.div className='innerNav'>
          <ul>
            <li>
              <NavLink to='/' >Home</NavLink>
            </li>
            <li>
              <NavLink to='specs' >Specs</NavLink>
            </li>
            <li>
              <NavLink to='compare-track'>Compare Track</NavLink>
            </li>
            <li>
              <NavLink to='add-car'>Add Vehicle</NavLink>
            </li>
            <li>
              <NavLink to='login'>Log In</NavLink>
            </li>
          </ul>

        </motion.div>
      </motion.nav>

    </div>
  )
}

export default Navbar