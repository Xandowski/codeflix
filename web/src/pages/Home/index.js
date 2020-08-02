import React from 'react';

import PageDefault from '../../components/PageDefault';
import dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  return (
    <PageDefault 
      urlVideo={dadosIniciais.categorias[0].videos[0].url}
      data={dadosIniciais.categorias}
      page='home'
    >
      
    </PageDefault>
  );
}

export default Home;
