import React, { } from 'react';

import PageDefault from '../../components/PageDefault';
import dadosLinguagens from '../../data/dados-linguagens.json';

const Linguagens = () => {
  const data = [dadosLinguagens.categorias[0], dadosLinguagens.categorias[1]];
  return (
    <PageDefault
      urlVideo={dadosLinguagens.categorias[0].videos[0].url}
      data={data}
      page="linguagens"
    />
  );
};

export default Linguagens;
