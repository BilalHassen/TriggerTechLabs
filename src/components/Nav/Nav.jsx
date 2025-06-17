import "./Nav.scss";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { useWidth } from "@hooks/useWidth";
import NavLargeMenu from "./NavLargeMenu/NavLargeMenu";
import logo from "/assets/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const width = useWidth();

  return (
    <>
      <header className="header">
        <nav className="nav">
          {/* <img className="nav__logo"
        src={logo}
        > */}
        <Link to="/">
          <h1 className="nav__logo">
            Trigger<span className="nav__logo-pink">Tech</span>
          </h1>
          </Link>
          {width >= 768 ? <NavLargeMenu /> : <BurgerMenu />}
        </nav>
      </header>
    </>
  );
};

export default Nav;
