import React from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from './styles';

const VideoPlayerComponent = ({ video, autoplay, controls }) => (

  <VideoPlayer
    src={video}
    autoPlay={autoplay}
    controls={controls}
    muted
    type="video/mp4"
  />
);

VideoPlayerComponent.propTypes = {
  video: PropTypes.string.isRequired,
  autoplay: PropTypes.bool.isRequired,
  controls: PropTypes.bool.isRequired,
};

export default VideoPlayerComponent;
