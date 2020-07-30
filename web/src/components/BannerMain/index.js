import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export default function BannerMain({
  url,
}) {
  const youTubeID = getYouTubeId(url);

  return (
    <BannerMainContainer>
      <VideoIframeResponsive
        youtubeID={youTubeID}
      />
    </BannerMainContainer>
  );
}
