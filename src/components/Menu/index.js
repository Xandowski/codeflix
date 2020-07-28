import React from 'react';
import Logo from '../../assets/images/Logo.png';
import '../Menu/Menu.css';
import { Search } from 'react-feather';

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="codeflix logo"/>
      </a>
      <ul className="links">
        <li><a href="/">Home</a></li>
        <li><a href="#frontend">FrontEnd</a></li>
        <li><a href="#backend">BackEnd</a></li>
        <li><a href="#fullstack">FullStack</a></li>
      </ul>

      <div className="search-bar">
        <input type="text"/>
        <Search color="white" />
      </div>
    </nav>
  );
}

export default Menu;