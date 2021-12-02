import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiTrendingDown } from "react-icons/hi";
import './Header.css'

const Header = (props) => {
  const [active, setActive] = useState("false");

  const handleClick = (e) => {
    setActive(!active);
    props.setNavbarClickable(!props.navbarClickable)
  };

  
  const navbarLinkHandle = active ? null : 'navbarOpen';
  const navbarLinkClass = `navbarClosed ${navbarLinkHandle}`

  const navbarIconHandle = active ? null : 'navbarIconRotate';
  const navbarIconClass = `navbarIcon ${navbarIconHandle}`

  const titleClass  = `navbarTitle ${props.routePageClass}`

  return (
    <nav className='navbarMain'>
      <div className='navbar'>
        <Link to="/" className={titleClass}>
          What if?
        </Link>
        <HiTrendingDown className={navbarIconClass} onClick={handleClick}/>
        <div className={navbarLinkClass}>
          <Link to="/Crypto-Details" onClick={handleClick} className='navbarLinks'>
            Crypto Calculator
          </Link>
          <Link to="/Inflation" onClick={handleClick} className='navbarLinks'>
            Inflation Calculator
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
