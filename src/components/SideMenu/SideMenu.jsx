import React from "react";
import "./SideMenu.scss";
import SideMenuList from "../SideMenuList/SideMenuList";

function SideMenu({ isOpen }) {
  console.log(isOpen);
  return (
    <aside className={`nav__side-menu ${isOpen ? "nav__side-menu-open" : ""}`}>
      <h1 className="nav__side-menu-logo">
        Trigger<span className="nav__side-menu-logo-pink">Tech</span>
      </h1>
    <SideMenuList/>
     
    </aside>
  );
}

export default SideMenu;
