import React from 'react';
import PropTypes from 'prop-types';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import BannerMainContainer from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

const BannerMain = ({ url }) => {
  const youTubeID = getYouTubeId(url);

  return (
    <BannerMainContainer>
      <VideoIframeResponsive
        youtubeID={youTubeID}
      />
    </BannerMainContainer>
  );
};

BannerMain.propTypes = {
  url: PropTypes.string.isRequired,
};

export default BannerMain;
