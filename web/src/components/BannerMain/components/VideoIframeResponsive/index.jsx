import React from 'react';
import PropTypes from 'prop-types';

import { VideoContainer, ResponsiveIframe } from './styles';

const YouTubeIframeResponsive = ({ youtubeID }) => (
  <VideoContainer>
    <ResponsiveIframe
      title="Titulo do Iframe"
      src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
      frameBorder="0"
      allow="autoplay; controls"
      allowFullScreen
    />
  </VideoContainer>
);

YouTubeIframeResponsive.propTypes = {
  youtubeID: PropTypes.string.isRequired,
};

export default YouTubeIframeResponsive;
