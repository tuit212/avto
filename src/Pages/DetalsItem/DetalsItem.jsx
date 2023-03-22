import React from 'react'
import {data} from '../../Assets/data/data'
import { useParams } from 'react-router-dom'

const DetalsItem = () => {
    const {id} = useParams();
    const post = data.find((item) => item.id === id - 0)
    console.log(data);

  return (
    <div className='detalsItem-section'>
        <div className="item__top">
            <div>
                <img src={post.images} alt={post.title} className='item__top-img' />
            </div>
            <div>
                <h3 className="item__top-title">
                    {post.title}
                </h3>
            </div>
        </div>
    </div>
  )
}

export default DetalsItem