

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React, { Component } from 'react';
import Intro from '../vistas/intro'
import AltaPAS from '../vistas/altaProver'
import AltaClass from '../vistas/altaClass'
// Guarda el estado de la APP
export default class Routers extends Component { 
  render () {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path ="/" component = {Intro} />
      <Route exact path ="/PAS" component = {AltaPAS} />
      <Route exact path ="/Centro" component = {AltaClass} />
      </Switch>
    </BrowserRouter>
  );
  
  }
}