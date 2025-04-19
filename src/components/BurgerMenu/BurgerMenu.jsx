import React from "react";
import { useState, useEffect } from "react";
import "./BurgerMenu.scss";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  


  return (
    <>
    
      <button className="nav__burger-btn" onClick={toggleMenu}>
        <span className="nav__burger-bar"></span>
        <span className="nav__burger-bar"></span>
      </button>

      <div className={`nav__menu ${isOpen ? "nav__menu-open" : ""}`}>
        <h1>this is the menu</h1>
      </div>

      <div className={`nav__overlay ${isOpen ? "nav__overlay-open" : ""}`}></div>
    </>
  );
};
