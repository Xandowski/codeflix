import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayerComponent from './components/VideoPlayerComponent';
import BannerMainContainer from './styles';

// eslint-disable-next-line react/prop-types
const BannerMain = ({ pathVideo, children }) => (
  <BannerMainContainer>
    <VideoPlayerComponent
      video={pathVideo}
      autoplay
      controls={false}
    />
    {children}
  </BannerMainContainer>
);

BannerMain.propTypes = {
  pathVideo: PropTypes.string.isRequired,
};

export default BannerMain;
