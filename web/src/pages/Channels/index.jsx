import React from 'react';
import PageDefault from '../../components/PageDefault';
import Main from './styles';

const Channels = () => (
  <PageDefault page="canais">
    <Main>
      <form>
        <label>Novo Canal</label>
        <input type="text" placeholder="nome do canal" />
      </form>
    </Main>
  </PageDefault>
);

export default Channels;
