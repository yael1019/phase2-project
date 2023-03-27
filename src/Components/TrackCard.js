import React, {useState} from 'react'
import {motion} from 'framer-motion'

function TrackCard({car, race, handleRace}) {
    
   if(car.hp >=1500){
   return (<motion.div 
     animate={{x: race ? "90%" : "null" }}
     transition={{type: "tween", duration: 8}}
    
    
      className='trackCard'>
        <img src ={car.image[0]} alt={car.name}/>
        </motion.div> 
  )}
  else if(car.hp >= 1000) {
    return (
        <motion.div 
     animate={{x: race ? "90%" : "null" }}
     transition={{type: "tween", duration: 9}}
    
    
      className='trackCard'>
        <img src ={car.image[0]} alt={car.name}/>
        </motion.div> 

    )
  }
  else if(car.model === "911 GT3 RS") {
    return (
        <motion.div 
        animate={{x: race ? "90%" : null }}
        transition={{type: "tween", duration: 10}}
        
       
         className='trackCard'>
           <img src ={car.image[0]} alt={car.name}/>
           </motion.div> 

    )
  }
  else if(car.model === 'Aventador LP 780-4 Ultimate') {
    return (
        <motion.div 
        animate={{x: race ? "90%" : null }}
        transition={{type: "tween", duration: 9.5}}
        
       
         className='trackCard'>
           <img src ={car.image[0]} alt={car.name}/>
           </motion.div> 
        
    )
  }
  else if(car.model === "R8 V10 quatro"){
    return (
        <motion.div 
        animate={{x: race ? "90%" : null }}
        transition={{type: "tween", duration: 10.5}}
        
       
         className='trackCard'>
           <img src ={car.image[0]} alt={car.name}/>
           </motion.div> 
        
 )
  }
  else if(car.hp >= 600){
    return (
        <motion.div 
    animate={{x: race ? "90%" : null }}
    transition={{type: "tween", duration: 11.5}}
    
   
     className='trackCard'>
       <img src ={car.image[0]} alt={car.name}/>
       </motion.div> 

    )
  }
  else{
    return (<motion.div 
    animate={{x: race ? "90%" : null }}
    transition={{type: "tween", duration: 13}}
    
   
     className='trackCard'>
       <img src ={car.image[0]} alt={car.name}/>
       </motion.div> )
    
  }
    
  
}

export default TrackCard