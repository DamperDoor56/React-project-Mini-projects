import React from 'react'
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';

const Routes = () => {
  return (
  <Switch>
    <Route exact path="/">
        <HomePage />
    </Route>
    <Route exact path="/Calculator">
        <HomePage />
    </Route>
    <Route exact path="/Caesar-Cipher">
        <HomePage />
    </Route>
    <Route exact path="/Roman-Converter">
        <HomePage />
    </Route>
  </Switch>
  );
};

export default Routes;