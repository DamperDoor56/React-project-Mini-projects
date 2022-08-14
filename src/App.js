import React from 'react';
import './components/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Sidebar/Navbar';
import HomePage from './components/pages/HomePage'
import ToDoList from './components/pages/ToDoList'

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
                  <Route exact path='/ToDoList'>
                    <ToDoList />
                  </Route>
                </Switch>
        </Router>
    </>
  )
}

export default App