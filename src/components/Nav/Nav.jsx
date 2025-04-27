import "./Nav.scss";
import { BurgerMenu } from '@components/BurgerMenu/BurgerMenu';
import { useWidth } from '@hooks/useWidth';
import NavLargeMenu from '@components/NavLargeMenu/NavLargeMenu';
import BurgerBtn from '@components/BurgerBtn/BurgerBtn';


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
