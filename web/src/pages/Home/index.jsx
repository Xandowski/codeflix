import React from 'react';

import PageDefault from '../../components/PageDefault';
import dadosIniciais from '../../data/dados_iniciais.json';

import Video from '../../assets/videos/conheca-o-canal-da-Alura.mp4';

function Home() {
  return (
    <PageDefault
      video={Video}
      titleVideo={dadosIniciais.categorias[0].videos[0].titulo}
      descVideo={dadosIniciais.categorias[0].videos[0].description}
      data={dadosIniciais.categorias}
      page="home"
      link="https://www.youtube.com/user/aluracursosonline"
    />
  );
}

export default Home;
