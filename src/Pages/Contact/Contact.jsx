import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='container' style={{margin: "100px auto" , height: "60vh"}}>
        <p>Contact pages</p> 
        <Link to={'/'}>Asoyiy pages o'tish</Link>
    </div>
  )
}

export default Contact