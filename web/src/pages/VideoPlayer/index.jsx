import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayerComponent from '../../components/BannerMain/components/VideoPlayerComponent';
import VideoHome from '../../assets/videos/conheca-o-canal-da-Alura.mp4';
import VideoLinguagens from '../../assets/videos/20-previsoes-para-2020.mp4';

const VideoPlayer = () => {
  const { id } = useParams();
  if (id === 'home') {
    return (
      <VideoPlayerComponent
        video={VideoHome}
        controls
      />
    );
  }

  return (
    <VideoPlayerComponent
      video={VideoLinguagens}
      controls
    />
  );
};

export default VideoPlayer;
