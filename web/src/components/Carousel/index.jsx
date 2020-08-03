import React from 'react';
import PropTypes from 'prop-types';
import { VideoCardGroupContainer, Title } from './styles';
import VideoCard from './components/VideoCard';
import Slider from './components/Slider';
import SliderItem from './components/Slider/styles';

const Carousel = ({ ignoreFirstVideo, category }) => {
  const categoryTitle = category.titulo;
  const { videos } = category;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title>
            {categoryTitle}
          </Title>
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
};

Carousel.propTypes = {
  ignoreFirstVideo: PropTypes.bool.isRequired,
  category: PropTypes.any.isRequired,
};

export default Carousel;
