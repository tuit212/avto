import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='container' style={{margin: "100px auto"}}>
        <p>About pages</p> 
        <Link to={'/'}>Asoyiy pages o'tish</Link>
    </div>
  )
}

export default About