import React from 'react'
import './Home.scss'
import {data} from '../../Assets/data/data'
import Detals from '../Detals/Detals';


const Home = () => {

  
  return (
    <div className='hero-section'>
      <div className="container">
        <div className="hero">
          <h2>Bizning avtomobillar</h2>
          <ul className='hero__list'>
            {data.map((item) => (
              <Detals key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home