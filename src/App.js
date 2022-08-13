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
                <Route path= '/' component={HomePage} />
                <Route path= '/' component={ToDoList} />
                <Route path= '/' component={RomanNumber} />
                <Route path= '/' component={CaesarCipher} />
            </Switch>
        </Router>
    </>
  )
}

export default App