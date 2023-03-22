import React from 'react'
import { Link } from 'react-router-dom'
import './Detals.scss'

const Detals = ({item}) => {
  return (
    <div className='pages-context'>
        <Link className='link' to={`${item.id}`} >
            <div className="pages__context-top">
              <img className='pages__img' src={item.images} alt={item.title} />
            </div>
            <div className="pages__context">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
            <div className="pages__btn">
              <button>Add Cart</button>
            </div>
        </Link>
    </div>
  )
}

export default Detals