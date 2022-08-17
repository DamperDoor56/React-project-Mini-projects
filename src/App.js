import React , { createContext, useState} from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Sidebar/Navbar';
import HomePage from './components/pages/HomePage';
import ToDoList from './components/pages/ToDoList';
import RomanNumber from './components/pages/RomanNumber';
import ReactSwitch from 'react-switch';
import CaesarCipher from './components/pages/CaesarCipher';
export const ThemeContext = createContext(null);



function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
  setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
};
  return (
    <>
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <body className='main' id={theme}>
        <Router>
            <Navbar 
            />
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
        </body>
        </ThemeContext.Provider>
    </>
  )
}

export default App