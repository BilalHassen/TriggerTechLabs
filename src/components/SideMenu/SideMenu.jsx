import React from 'react'
import "./SideMenu.scss"
function SideMenu({isOpen}) {
    console.log(isOpen)
  return (
    
    <div className={`nav__menu ${isOpen ? "nav__menu-open" : ""}`}>
    <h1>this is the menu</h1>
  </div>
  )
}

export default SideMenu