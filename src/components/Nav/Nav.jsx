import "./Nav.scss";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
const Nav = () => {
  return (
    <>
    <header className="header">
      <nav className="nav">
        <h1 className="nav__logo">
          Trigger<span className="nav__logo-pink">Tech</span>
        </h1>
        <BurgerMenu/>
      </nav>
      </header>
    </>
  );
};

export default Nav;
