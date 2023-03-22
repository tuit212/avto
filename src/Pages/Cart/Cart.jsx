import React from 'react'
import './Cart.scss'


const Cart = ({cart , setCart }) => {

  const handeDelete = (id) => {
    const arr = cart.filter((items) => items.id !== id)
    setCart(arr)
  }

  return (
    <div className='carts container'>
      {
        cart.map((items) => (
          <div className="cart__box" key={items.id}>
            <div className="img">
              <img src={items.images} alt={items.title} />
            </div>
            <div className="content">
              <h4>{items.title}</h4>
              <p>{items.desc}</p>
              <button onClick={() => handeDelete(items.id)} ><i class="fa-sharp fa-solid fa-trash"></i></button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Cart