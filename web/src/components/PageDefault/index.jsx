import React from 'react';
import PropTypes from 'prop-types';

import Menu from '../Menu';
import BannerMain from '../BannerMain';
import Footer from '../Footer';

import CategorySelection from '../CategorySelection';
import Carousel from '../Carousel';
import VideoInformations from '../BannerMain/components/VideoInformations';

const PageDefault = ({
  // eslint-disable-next-line react/prop-types
  video, data, page, titleVideo, descVideo, link,
}) => {
  const languages = ['Selecione uma linguagem', 'javascript', 'python', 'java', 'c#'];

  return (
    <>
      <Menu />

      <BannerMain
        pathVideo={video}
        title={titleVideo}
        description={descVideo}
      >
        <VideoInformations title={titleVideo} desc={descVideo} videoRef={page} link={link} />
      </BannerMain>

      {
        page === 'languages' && (
          <CategorySelection
            name="Linguagens"
            arr={languages}
            data={data}
          />
        )
      }
      {
        page === 'home' && (
          // eslint-disable-next-line react/prop-types
          data.map((category) => {
            if (category.titulo === 'Videos Populares sobre Programação') {
              return (
                <Carousel
                  key={category.titulo}
                  ignoreFirstVideo
                  category={category}
                />
              );
            }
            return (
              <Carousel
                key={category.titulo}
                category={category}
                ignoreFirstVideo={false}
              />
            );
          })
        )
      }

      <Footer />
    </>
  );
};

PageDefault.propTypes = {
  video: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  titleVideo: PropTypes.string.isRequired,
  descVideo: PropTypes.string.isRequired,
};

export default PageDefault;
