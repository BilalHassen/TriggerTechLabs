import React from "react";
import "./SideMenuList.scss";
import { Link } from "react-router-dom";
import links from "./sideMenuData";



function SideMenuList() {
  return (
    <ul className="nav__side-menu-list">
      {links.map((text) => {
        
        return(
          <Link to={text.path} key={text.id}>
        <li className="nav__side-menu-item">
          <p className="nav__side-menu-text">{text.title}</p>
        </li>
        </Link>
        )
})}
    </ul>
  );
}

export default SideMenuList;
