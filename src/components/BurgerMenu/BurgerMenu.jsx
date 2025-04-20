import React from "react";
import { useState, useEffect } from "react";
import "./BurgerMenu.scss";
import SideMenu from "../SideMenu/SideMenu";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
        <button
        className={`nav__burger-btn ${isOpen ? "open" : ""}`}
        onClick={()=>setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={`nav__burger-bar ${isOpen ? "open-bar-1" : ""}`}></span>
        <span className={`nav__burger-bar ${isOpen ? "open-bar-2" : ""}`}></span>
      </button>

     <SideMenu isOpen={isOpen}/>

      <div
        className={`nav__overlay ${isOpen ? "nav__overlay-open" : ""}`}
      ></div>
    </>
  );
};
