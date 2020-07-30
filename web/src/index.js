import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Frontend from './pages/Frontend';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/frontend" component={Frontend} />
      <Route path="/" component={Home} exact />
      <Route component={() => (<div>Página 404</div>)} />
    </Switch> 
  </BrowserRouter>,
  document.getElementById('root')
);
