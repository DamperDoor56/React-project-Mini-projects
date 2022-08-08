import React from 'react'
import { Route, Switch } from 'react-router-dom';
import CaesarCipher from './components/pages/CaesarCipher';
import HomePage from './components/pages/HomePage';
import RomanNumber from './components/pages/RomanNumber';
import ToDoList from './components/pages/ToDoList';

const Routes = () => {
  return (
  <Switch>
    <Route exact path="/">
        <HomePage />
    </Route>
    <Route exact path="/CaesarCipher">
        <CaesarCipher />
    </Route>
    <Route exact path="/RomanNumber">
        <RomanNumber />
    </Route>
    <Route exact path="/ToDoList">
        <ToDoList />
    </Route>
  </Switch>
  );
};

export default Routes;