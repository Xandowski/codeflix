import React, {useState } from 'react';

import dadosIniciais from '../../data/dados_iniciais.json';

import Menu from '../Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../Footer';

const PageDefault = ({ children, urlVideo }) => {
  // const [videos, setVideos] = useState('');

  
  // fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=programacao&key=AIzaSyBu4imdJtasgW67rtUrJO3l8bWEqwXsX3U`, {
  // method: 'GET',
  // })
  // .then(resp => resp.json())
  // .then(result => {
  //   console.log(result)
  // })

  return (
    <>
      <Menu/>

      <BannerMain
        url={urlVideo}
      />
      {children}

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Footer/>
    </>
  )
}

export default PageDefault;