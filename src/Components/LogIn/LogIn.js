import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function LogIn({ form, setForm, handleSubmit }) {
    const navigate = useNavigate()
    const handleChange = e => setForm({...form, [e.target.name]: e.target.value})
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
        <form onSubmit={ handleSubmit }>
            <label for="username">Username:</label>
            <input type='text' id='username' placeholder='Username' name="username" value={ form.username } onChange={ handleChange } />
            <label for="password">Password:</label>
            <input type='password' id='password' placeholder='Password' name="password" value={ form.password } onChange={ handleChange } />
            <input type='submit' value='Log In' />
        </form>
    </div>
  )
}

export default LogIn