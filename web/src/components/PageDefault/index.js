import React from 'react';

import Menu from '../Menu';
import BannerMain from '../../components/BannerMain';
import Footer from '../Footer';

import CategorySelection from '../CategorySelection';
import Carousel from '../../components/Carousel';

const PageDefault = ({ urlVideo, data, page, children }) => {
  const languages = ['javascript', 'python', 'java', 'c#'];

  return (
    <>
      <Menu/>

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
          >
          </CategorySelection>
        )
      }
      {
        page === 'home' && (
          data.map((category) => {
            if(category.titulo === 'Videos Populares sobre Programação'){
              return <Carousel
                      key={category.titulo}
                      ignoreFirstVideo
                      category={category}
                    />
            }else {
              return <Carousel
                        key={category.titulo}
                        category={category}
                      />
            }
          })
        )
      }
      {children}

      <Footer/>
    </>
  )
}

export default PageDefault;