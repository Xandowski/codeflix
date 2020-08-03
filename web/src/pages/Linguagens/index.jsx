import React, { } from 'react';

import PageDefault from '../../components/PageDefault';
import dadosLinguagens from '../../data/dados-linguagens.json';

const Video = 'http://localhost:3000/static/media/20-previsoes-para-2020.6cd3043a.mp4';

const Linguagens = () => {
  const data = [dadosLinguagens.categorias[0], dadosLinguagens.categorias[1]];
  return (
    <PageDefault
      titleVideo="20 previsões para 2020"
      descVideo="Programação, Web, Hospedagem, DevOps, Database, I.A., Low-code..."
      video={Video}
      data={data}
      page="languages"
      link="https://www.youtube.com/channel/UCU5JicSrEM5A63jkJ2QvGYw"
    />
  );
};

export default Linguagens;
