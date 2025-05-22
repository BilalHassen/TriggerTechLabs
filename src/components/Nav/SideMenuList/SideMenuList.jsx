import React from "react";
import "./SideMenuList.scss";

function SideMenuList() {
  return (
    <ul className="nav__side-menu-list">
      <li className="nav__side-menu-item">
        <p className="nav__side-menu-text">Projects</p>
      </li>
      <li className="nav__side-menu-item">
        <p className="nav__side-menu-text">Services</p>
      </li>
      <li className="nav__side-menu-item">
        <p className="nav__side-menu-text">Contact</p>
      </li>
      <li className="nav__side-menu-item">
        <p className="nav__side-menu-text">Case Study</p>
      </li>
    </ul>
  );
}

export default SideMenuList;
