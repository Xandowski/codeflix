import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayerComponent from './components/VideoPlayerComponent';
import VideoInformations from './components/VideoInformations';
import BannerMainContainer from './styles';

const BannerMain = ({ pathVideo, title, description }) => (
  <BannerMainContainer>
    <VideoPlayerComponent
      video={pathVideo}
      autoplay
      controls={false}
    />
    <VideoInformations title={title} desc={description} />
  </BannerMainContainer>
);

BannerMain.propTypes = {
  pathVideo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BannerMain;
