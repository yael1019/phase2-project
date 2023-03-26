import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function LogIn() {
    const navigate = useNavigate()
  return (
    <div>
        <motion.button
        whileHover={{
            scale: 1.1,
            boxShadow: '0px 0px 8px rgb(255, 255, 255)'
        }}
        onClick={ () => navigate('/') }
        >
            Log Out
        </motion.button>
        <form>
            <label for="username">Username:</label>
            <input type='text' id='username' placeholder='Username' name="username"/>
            <label for="password">Password:</label>
            <input type='password' id='password' placeholder='Password' name="password"/>
        </form>
    </div>
  )
}

export default LogIn