import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Linguagens from './pages/Linguagens';
import VideoPlayer from './pages/VideoPlayer';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/videoplayer" component={VideoPlayer} />
      <Route path="/linguagens" component={Linguagens} />
      <Route path="/" component={Home} exact />
      <Route component={() => (<div>Página 404</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
