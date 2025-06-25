import "./Nav.scss";
import PropTypes from 'prop-types';
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { useWidth } from "@hooks/useWidth";
import NavLargeMenu from "./NavLargeMenu/NavLargeMenu";
import { Link } from "react-router-dom";

const Nav = () => {
  const width = useWidth();
  const isMobile = width < 768;

  return (
    <header className="header">
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <Link to="/" className="nav__logo-link">
          <h1 className="nav__logo">
            Trigger<span className="nav__logo-pink">Tech</span>
          </h1>
        </Link>
        {isMobile ? <BurgerMenu /> : <NavLargeMenu />}
      </nav>
    </header>
  );
};

export default Nav;
