import React, { useEffect } from "react";
import "./SideMenu.scss";
import SideMenuList from "../SideMenuList/SideMenuList";
import SideMenuFooter from "../SideMenuFooter/SideMenuFooter";
import { useRef } from "react";

function SideMenu({ isOpen, handleSideMenu }) {
  
  const sideMenuRef = useRef()

  useEffect(()=>{

   

  },[])

  console.log(isOpen)



  return (
    <aside ref={sideMenuRef} className={`nav__side-menu ${isOpen ? "nav__side-menu-open" : ""}`}>
      <h1 className="nav__side-menu-logo">
        Trigger<span className="nav__side-menu-logo-pink">Tech</span>
      </h1>
    <SideMenuList/>
     <SideMenuFooter/>
     <button onClick={handleSideMenu}>close</button>
    </aside>
    
  );
}

export default SideMenu;
