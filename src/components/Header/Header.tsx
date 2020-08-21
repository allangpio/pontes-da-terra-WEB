import React from 'react';


import './Header.css'
import logo from '../../assets/logo.png';

interface logo {
  logo: string;
}

function Header() {
  return (
    <div className="nav">
      <ul>
        <a href="/">
          <li>Home</li>
        </a>
        <a href="#">
          <li>Sobre</li>
        </a>
        <a href="#">
          <li>FAQ</li>
        </a>
        <a href="#" className="donate">
          <li>Doar</li>
        </a>
      </ul>
      <img src={logo} alt="Logo"/>
    </div>  
  )
}

export default Header;
