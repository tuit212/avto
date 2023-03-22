import React from 'react'
import { Link } from 'react-router-dom'
import './Detals.scss'

const Detals = ({item , handleClick}) => {

  const {id , images , title , desc } = item;
  return (
    <div className='pages-context'>
        <Link className='link' to={`${id}`} >
            <div className="pages__context-top">
              <img className='pages__img' src={images} alt={title} />
            </div>
            <div className="pages__context">
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
            <div className="pages__btn">
              <button onClick={() => handleClick(item)}>Add Cart</button>
            </div>
        </Link>
    </div>
  )
}

export default Detals