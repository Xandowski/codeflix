import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayerComponent from '../../components/BannerMain/components/VideoPlayerComponent';

const VideoPlayer = () => {
  const { id } = useParams();
  if (id === 'home') {
    return (
      <VideoPlayerComponent
        video="http://localhost:3000/static/media/conheca-o-canal-da-Alura.28d3761d.mp4"
        controls
      />
    );
  }

  return (
    <VideoPlayerComponent
      video="http://localhost:3000/static/media/20-previsoes-para-2020.6cd3043a.mp4"
      controls
    />
  );
};

export default VideoPlayer;
