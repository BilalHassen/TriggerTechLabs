import "./Nav.scss";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { useWidth } from "../../hooks/useWidth";
import NavLargeMenu from "../NavLargeMenu/NavLargeMenu";
import BurgerBtn from "../BurgerBtn/BurgerBtn";

const Nav = () => {

  const width = useWidth()
  console.log(width)

  return (
    <>
    <header className="header">
      <nav className="nav">
        <h1 className="nav__logo">
          Trigger<span className="nav__logo-pink">Tech</span>
        </h1>
        {width >= 768 ? <NavLargeMenu/> : <BurgerMenu/>}
      </nav>
      </header>
    </>
  );
};

export default Nav;
