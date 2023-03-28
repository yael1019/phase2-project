import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Homepage({ user, setUser }) {
    const navigate = useNavigate()

    function handleLogoutClick() {
        setUser(false)
        navigate('/')
    }
    
    return (
        <div>
            {
                user.username
                    ?
                    <motion.button
                        whileHover={{
                            scale: 1.1,
                            boxShadow: '0px 0px 8px rgb(255, 255, 255)'
                        }}
                        onClick={ handleLogoutClick }
                    >
                        Log Out
                    </motion.button>
                    :
                    <motion.button
                        whileHover={{
                            scale: 1.1,
                            boxShadow: '0px 0px 8px rgb(255, 255, 255)'
                        }}
                        onClick={ () => navigate('/login') }
                    >
                        Log In
                    </motion.button>
            }
            <motion.button
                id='change-img-btn'
                whileHover={{
                    scale: 1.1,
                    boxShadow: '0px 0px 8px rgb(255, 255, 255)'
                }}
            >
                Driver's Seat Mode
            </motion.button>
            <motion.h1
                initial={{ x: -2000 }}
                animate={{ x: 0 }}
                transition={{
                    duration: '2',
                    delay: 0.4
                }}
                whileHover={{
                    opacity: 0.5,
                    scale: 1.5
                }}
            >
                {
                    user.username
                        ?
                        `${user.username}'s Garage`
                        :
                        'Exotic Garage'
                }
            </motion.h1>
            {/* <img id="homepage-img" src='https://cdnb.artstation.com/p/assets/images/images/031/801/623/large/felippe-carballo-render1.jpg?1604620213' alt='car wheel' /> */}
        </div>
    )
}

export default Homepage