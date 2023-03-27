import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function LogIn({ form, setForm, handleSubmit }) {
    const navigate = useNavigate()
    const handleChange = e => setForm({...form, [e.target.name]: e.target.value})
  return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor="username">Username:</label>
            <input type='text' id='username' placeholder='Username' name="username" value={ form.username } onChange={ handleChange } />
            <label htmlFor="password">Password:</label>
            <input type='password' id='password' placeholder='Password' name="password" value={ form.password } onChange={ handleChange } />
            <input type='submit' value='Log In'/>
        </form>
  )
}

export default LogIn