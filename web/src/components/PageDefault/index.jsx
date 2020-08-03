import React from 'react';
import PropTypes from 'prop-types';

import Menu from '../Menu';
import BannerMain from '../BannerMain';
import Footer from '../Footer';

import CategorySelection from '../CategorySelection';
import Carousel from '../Carousel';

const PageDefault = ({
  urlVideo, data, page, children,
}) => {
  const languages = ['javascript', 'python', 'java', 'c#'];

  return (
    <>
      <Menu />

      {
        page !== 'canais' && (
          <BannerMain
            url={urlVideo}
          />
        )
      }
      {
        page === 'linguagens' && (
          <CategorySelection
            name="Linguagens"
            arr={languages}
            data={data}
          />
        )
      }
      {
        page === 'home' && (
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
              />
            );
          })
        )
      }
      {children}

      <Footer />
    </>
  );
};

PageDefault.propTypes = {
  urlVideo: PropTypes.string.isRequired,
  data: PropTypes.isRequired,
  page: PropTypes.string.isRequired,
  children: PropTypes.isRequired,
};

export default PageDefault;
