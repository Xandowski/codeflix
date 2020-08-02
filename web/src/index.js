import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Linguagens from './pages/Linguagens';
import Channels from './pages/Channels';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route path="/Canais" component={Channels} />
      <Route path="/linguagens" component={Linguagens} />
      <Route path="/" component={Home} exact />
      <Route component={() => (<div>Página 404</div>)} />
    </Switch> 
  </BrowserRouter>,
  document.getElementById('root')
);
