import React from 'react';

import dadosIniciais from '../../data/dados_iniciais.json';

import Menu from '../Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../Footer';

const PageDefault = ({ children }) => {
  // const response = api.get('/search', {
  //   params: {
  //     q: 'programacao'
  //   },
  // })
  // console.log(response.data)
  // fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=programacao&key=AIzaSyAsf96_LYlum-nRDjHZDz8J-sOl69y6fJw`, {
  //   method: 'GET',
  //   mode: 'no-cors'
  // }).then(response => JSON.stringify(response))
  //   .then(result => console.log(result.data));

  return (
    <>
      <Menu/>

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end?"}
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