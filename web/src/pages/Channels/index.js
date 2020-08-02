import React from 'react';

import PageDefault from '../../components/PageDefault';
import dadosIniciais from '../../data/dados_iniciais.json';
import { Main } from './styles';

const Channels = () => {

  return (
    <PageDefault page='canais' >
      <Main>
        <form>
          <label>Novo Canal</label>
          <input type="text" placeholder="nome do canal"/>
        </form>
      </Main>
    </PageDefault>
  )
}

export default Channels;