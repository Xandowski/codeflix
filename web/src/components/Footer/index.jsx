import React from 'react';
import { GitHub } from 'react-feather';
import FooterBase from './styles';
import ReactLogo from '../../assets/images/react-logo.png';

function Footer() {
  return (
    <FooterBase>

      <a href="https://www.alura.com.br/" target="blank">
        Imersão React
        {' '}
        <img src={ReactLogo} alt="react logo" style={{ width: '30px' }} />
        {' '}
        <span>Alura.</span>
      </a>
      <a href="https://github.com/Xandowski/" target="blank">
        Xandowski
        {' '}
        <span>
          <GitHub />
        </span>
        {' '}
      </a>
    </FooterBase>
  );
}

export default Footer;
