/* eslint-disable react/prop-types */
import React from 'react';
import SlickSlider from 'react-slick';
import { Container } from './styles';

const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
