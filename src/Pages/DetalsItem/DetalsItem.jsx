import React from 'react'
import {data} from '../../Assets/data/data'
import { useParams } from 'react-router-dom'
import './DetalsItem.scss'

const DetalsItem = ({handleClick}) => {
    const {id} = useParams();
    const post = data.find((item) => item.id === id - 0)

  return (
    <div className='detalsItem-section'>
        <div className="container">
            <div className="detals">
                <div className="item__top">
                    <div className='left'>
                        <img src={post.images} alt={post.title} className='item__top-img' />
                    </div>
                    <div className='right'>
                        <h3 className="item__top-title">
                            {post.title}
                        </h3>
                        <p>
                            {post.text}
                        </p>
                        <button>
                            Add card
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetalsItem