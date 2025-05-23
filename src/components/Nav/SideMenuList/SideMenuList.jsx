import React from "react";
import "./SideMenuList.scss";

const links = ["Projects", "Services", "Contact", "Case Study"];

function SideMenuList() {
  return (
    <ul className="nav__side-menu-list">
      {links.map((text) => (
        <li key={text} className="nav__side-menu-item">
          <p className="nav__side-menu-text">{text}</p>
        </li>
      ))}
    </ul>
  );
}

export default SideMenuList;
