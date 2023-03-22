import React from 'react' 
import './Footer.scss'
import { Link , NavLink} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-section'>
      <div className="container">
        <div className="footer">
          <div className="footer__logo">
            <Link to={'/'} className='logo' >Logo</Link>
          </div>
          <div className="footer__navbar">
            <NavLink to={'about'} className='navbar'>
              About
            </NavLink>
            <NavLink to={'contact'} className='navbar'>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer