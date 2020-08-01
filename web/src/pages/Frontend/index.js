import React from 'react';

import PageDefault from '../../components/PageDefault';
import dadosIniciais from '../../data/dados_iniciais.json';
import CategorySelection from '../../components/CategorySelection';

const Frontend = () => {
  const frontendCategories = ['html', 'css', 'js'];
  return (
    <PageDefault urlVideo={dadosIniciais.categorias[0].videos[1].url} >
      <CategorySelection name="Frontend" arr={frontendCategories}>
      </CategorySelection>
    </PageDefault>
  )
}

export default Frontend;