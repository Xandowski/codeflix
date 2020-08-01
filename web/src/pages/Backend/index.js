import React from 'react';

import PageDefault from '../../components/PageDefault';
import dadosIniciais from '../../data/dados_iniciais.json';
import CategorySelection from '../../components/CategorySelection';

const Frontend = () => {
  const backendCategories = ['node', 'php', 'java'];
  return (
    <PageDefault urlVideo={dadosIniciais.categorias[0].videos[2].url} >
      <CategorySelection name="Backend" arr={backendCategories}>
      </CategorySelection>
    </PageDefault>
  )
}

export default Frontend;