import React from 'react'
import './Header.scss'
import { Link , NavLink} from "react-router-dom";

const Header = ({size}) => {
  return (
    <div className='site-header'>
      <div className="container">
        <div className="header">
          <div className="header__logo">
            <Link to={'/'} className='logo' >Logo</Link>
          </div>
          <div className="header__navbar">
            <NavLink to={'about'} className='navbar'>
              About
            </NavLink>
            <NavLink to={'contact'} className='navbar'>
              Contact
            </NavLink>
          </div>
          <div className="header__cart">
            <Link className='cart' to={'cart'}>
              <i class="fa-solid fa-cart-plus" style={{color: "#f5f5f5"}}></i>
              <span className='size'>{size}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header