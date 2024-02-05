import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbarStyle.css';
import img1 from '../../Assets/petslogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    window.location.href = '/#contact';
  };

  return (
    <nav className={`NavbarItems ${isOpen ? 'active' : ''}`}>
      <Link to="/" className="linklogo" onClick={closeMenu}>
        <h1 className="navbar-logo">
          {' '}
          <img className="imgnav" src={img1} alt="/" />
        </h1>
      </Link>

      <div className="menu-icons" onClick={toggleMenu}>
        <i className={`uil uil-apps ${isOpen ? 'active' : ''}`}></i>
      </div>

      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/services" className="nav-links" onClick={closeMenu}>
            ABOUT US
          </Link>
        </li>
        <li>
          <Link to="/services" className="nav-links" onClick={closeMenu}>
            PRODUCTS
          </Link>
        </li>
        <li>
          <Link to="/services" className="nav-links" onClick={closeMenu}>
            OUR SERVICES
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-links" onClick={handleContactClick}>
            CONTACT US
          </Link>
        </li>
        <li>
          <Link to="/login" className="boton" onClick={closeMenu}>
            SIGN IN
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
