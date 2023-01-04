import React, {useState} from 'react'; 
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Toggle from './Toggle';
import Logo from '../images/logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import '../css/Header.scss';

function Header() {
  const [navToggled, setNavToggled] = useState(false);
  const handleNavToggle = () => {
    setNavToggled(!navToggled);
  }
  return (
    <header data-testid="header">
      <img src={Logo} className="logo" alt="ACB Design" />
        <Link to="cart">
          <button type="button" className="go-to-cart"><FaShoppingCart /></button>
        </Link>
        <Toggle handleNavToggle={handleNavToggle} />
        {navToggled ? <Menu handleNavToggle={handleNavToggle} /> : null }
      </header>
  );
}

export default Header;
