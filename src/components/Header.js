import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiTrendingDown } from "react-icons/hi";

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

  return (
    <nav className='navbar'>
      <Link to="/" className='navbarTitle'>
        What if?
      </Link>
      <HiTrendingDown className={navbarIconClass} onClick={handleClick}/>
      <div className={navbarLinkClass}>
        <Link to="/Crypto-Details" onClick={handleClick} className='navbarLinks'>
          Crypto Calculator
        </Link>
        <Link to="/Inflation-Calculator" onClick={handleClick} className='navbarLinks'>
          Inflation Calculator
        </Link>
      </div>
    </nav>
  );
};

export default Header;
