import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Section, Div, Button,
} from './styles';

const VideoInformations = ({
  title, desc, videoRef, link,
}) => (
  <Section>
    <h1>{title}</h1>
    <p>{desc}</p>
    <Div>
      <Button as={Link} to={videoRef}>
        Play
      </Button>
      <Button href={link} target="_blank">
        More Info
      </Button>
    </Div>
  </Section>
);

VideoInformations.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  videoRef: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default VideoInformations;
