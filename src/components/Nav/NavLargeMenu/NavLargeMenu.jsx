import React from 'react'
import {Link} from "react-router-dom"

import "./NavLargeMenu.scss"

 function NavLargeMenu() {
  return (
    <div className="nav__links">
        <ul className='nav__links-container'>
            <Link to="">
            <li className='nav__links-item'>Projects</li>
            </Link>
            <Link to="">
            <li className='nav__links-item'>Services</li>
            </Link>
            <Link to="">
            <li className='nav__links-item'>Contact</li>
            </Link>
            <Link to="">
            <li className='nav__links-item'>Case Study</li>
            </Link>
            
        </ul>
    </div>
  )
}

export default NavLargeMenu;