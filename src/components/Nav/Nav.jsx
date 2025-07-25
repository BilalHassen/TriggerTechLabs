import "./Nav.scss";
import PropTypes from 'prop-types';
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { useWidth } from "@hooks/useWidth";
import NavLargeMenu from "./NavLargeMenu/NavLargeMenu";
import { Link } from "react-router-dom";

/**
 * Navigation Component
 * Provides main site navigation with responsive design
 * Enhanced with accessibility features including proper ARIA labels and semantic HTML
 */
const Nav = () => {
  const width = useWidth();
  const isMobile = width < 768;

  return (
    <header className="header" role="banner">
      <nav 
        className="nav" 
        role="navigation" 
        aria-label="Main navigation"
        aria-expanded={isMobile ? undefined : "true"}
      >
        <Link 
          to="/" 
          className="nav__logo-link"
          aria-label="TriggerTechLabs - Home"
        >
          <h1 className="nav__logo">
            Trigger<span className="nav__logo-pink">Tech</span>
          </h1>
        </Link>
        
        {/* Mobile navigation with burger menu */}
        {isMobile ? (
          <BurgerMenu />
        ) : (
          /* Desktop navigation menu */
          <NavLargeMenu />
        )}
      </nav>
    </header>
  );
};

export default Nav;
