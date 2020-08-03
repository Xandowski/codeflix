import React from 'react';
import VideoPlayerComponent from '../../components/BannerMain/components/VideoPlayerComponent';

const Video = 'http://localhost:3000/static/media/conheca-o-canal-da-Alura.28d3761d.mp4';

const VideoPlayer = () => (
  <VideoPlayerComponent
    video={Video}
    controls
  />
);

export default VideoPlayer;
