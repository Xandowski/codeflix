import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'react-feather';

import LogoImg from '../../assets/images/Logo.png';
import {
  Logo, Nav, Links, SearchBar,
} from './styles';

const Menu = () => (
  <Nav>
    <Link to="/">
      <Logo src={LogoImg} alt="codeflix logo" />
    </Link>
    <Links>
      <li><Link to="/">Início</Link></li>
      <li><Link to="/linguagens">Linguagens</Link></li>
      <li><Link to="/canais">Canais</Link></li>
    </Links>

    <SearchBar className="search-bar">
      <input type="text" />
      <Search color="white" />
    </SearchBar>
  </Nav>
);

export default Menu;
