import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function LogIn({ form, setForm, handleSubmit }) {
  const navigate = useNavigate()
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  return (
    <div id='login-div'>
      <img id='user-icon' src='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png' alt='user icon' />
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <br />
        <motion.input
          type='text'
          id='username'
          placeholder='Username'
          name="username"
          value={form.username}
          onChange={handleChange}
          whileHover={{
            boxShadow: '0px 0px 8px rgb(255, 255, 255)'
          }}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <motion.input
          type='password'
          id='password'
          placeholder='Password'
          name="password"
          value={form.password}
          onChange={handleChange}
          whileHover={{
            boxShadow: '0px 0px 8px rgb(255, 255, 255)'
          }}
        />
        <br />
        <motion.input
          type='submit'
          value='Log In'
          whileHover={{
            scale: 1.05,
            boxShadow: '0px 0px 8px rgb(255, 255, 255)'
          }}
        />
      </form>
    </div>
  )
}

export default LogIn