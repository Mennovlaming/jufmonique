import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './NavigationBar.css';

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
    <a className='logo' href="/"><img src="/images/logo_vol.png" alt="" /></a>
    <nav>
      
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className='open-icon'>&#9776;</div>
          <div className='close-icon'>&#10005;</div>
        </div>
      <ul className={isMenuOpen ? 'open' : ''}>
    
          <li onClick={closeMenu}><Link to={"/OverMij"}>Over mij</Link></li>
          <li onClick={closeMenu}><Link to={"/Waarom"}>Waarom</Link></li>
          <li onClick={closeMenu}><Link to={"/Aanbod"}>Aanbod</Link></li>
          <li onClick={closeMenu}><Link to={"/VoorScholen"}>Voor Scholen</Link></li>
          <li onClick={closeMenu}><Link to={"/Tarieven"}>Tarieven</Link></li>
          <li onClick={closeMenu}><Link to={"/Contact"}>Contact</Link></li>
    
      </ul>
  </nav>
  </>
  );
}

export default NavigationBar;
