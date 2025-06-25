import React from "react";
import {Link} from "react-router-dom";
import "./SideMenu.scss";
import SideMenuList from "@components/Nav/SideMenuList/SideMenuList";
import SideMenuFooter from "@components/Nav/SideMenuFooter/SideMenuFooter";
import BurgerBtn from "@components/Nav/BurgerBtn/BurgerBtn";

function SideMenu({ isOpen, handleSideMenu }) {
  return (
    <>
      <aside
        className={`nav__side-menu ${isOpen ? "nav__side-menu-open" : ""}`}
      >
        <div
          className={`nav__animation-container ${isOpen ? "nav__animation-container-open" : ""}`}
        >
          <div className="nav__side-menu-container">
            <Link to="/">
            <h1 className="nav__side-menu-logo">
              Trigger<span className="nav__side-menu-logo-pink">Tech</span>
            </h1>
            </Link>
            <BurgerBtn
              isOpen={isOpen}
              onClick={handleSideMenu}
              buttonClass={"nav__side-burger-btn"}
              barClass={"nav__side-burger-bar"}
            />
          </div>
          <SideMenuList />
          <SideMenuFooter />
        </div>
      </aside>
    </>
  );
}

export default SideMenu;
