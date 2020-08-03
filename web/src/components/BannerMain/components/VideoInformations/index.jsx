import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Section, Div, Button,
} from './styles';

const VideoInformations = ({ title, desc }) => (
  <Section>
    <h1>{title}</h1>
    <p>{desc}</p>
    <Div>
      <Button as={Link} to="/videoplayer">
        Play
      </Button>
      <Button href="https://www.youtube.com/user/aluracursosonline" target="_blank">
        More Info
      </Button>
    </Div>
  </Section>
);

VideoInformations.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default VideoInformations;
