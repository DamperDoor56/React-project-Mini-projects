import React from 'react';
import './components/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Sidebar/Navbar';
import HomePage from './components/pages/HomePage'
import ToDoList from './components/pages/ToDoList'
import RomanNumber from './components/pages/RomanNumber'
import CaesarCipher from './components/pages/CaesarCipher'

function App() {
  return (
    <>
        <Router>
            <Navbar/>
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route exact path='/ToDoList'>
                    <ToDoList />
                  </Route>
                  <Route exact path='/RomanNumber'>
                    <RomanNumber />
                  </Route>
                  <Route exact path='/CaesarCipher'>
                    <CaesarCipher />
                  </Route>
                </Switch>
        </Router>
    </>
  )
}

export default App