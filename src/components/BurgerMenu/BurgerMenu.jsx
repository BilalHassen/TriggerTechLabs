import React from 'react'
import { useState } from 'react'

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = ()=>{
        setIsOpen(!open)
    }
  return (
    <button className="nav__burger-btn" onClick={toggleMenu}>
    <span className="nav__burger-bar"></span>
    <span className="nav__burger-bar"></span>
    </button>
  )
}
