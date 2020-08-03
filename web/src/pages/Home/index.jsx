import React from 'react';

import PageDefault from '../../components/PageDefault';
import dadosIniciais from '../../data/dados_iniciais.json';

const Video = 'http://localhost:3000/static/media/conheca-o-canal-da-Alura.28d3761d.mp4';

function Home() {
  return (
    <PageDefault
      video={Video}
      titleVideo={dadosIniciais.categorias[0].videos[0].titulo}
      descVideo={dadosIniciais.categorias[0].videos[0].description}
      data={dadosIniciais.categorias}
      page="home"
    />
  );
}

export default Home;
