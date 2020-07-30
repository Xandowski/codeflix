import React from 'react';
import Logo from '../../assets/images/Logo.png';
import '../Menu/Menu.css';
import { Search } from 'react-feather';

import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="codeflix logo"/>
      </Link>
      <ul className="links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/frontend">FrontEnd</Link></li>
        <li><Link to="/backend">BackEnd</Link></li>
        <li><Link to="/fullstack">FullStack</Link></li>
      </ul>

      <div className="search-bar">
        <input type="text"/>
        <Search color="white" />
      </div>
    </nav>
  );
}

export default Menu;