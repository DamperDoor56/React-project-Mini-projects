import React,{createContext, useState} from 'react';
import './styles/Home.css';

export const ThemeContext = createContext(null);

const HomePage = () => {
  const [theme, setTheme] = useState('');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
}; 
  return (<>
  <div className='home' id={theme}>
    <h1 className='titls-home'>Home Page</h1> 
    <button id={theme}>Github</button>
    <button id={theme}>Linkedin</button>
  </div>
  </>
  )

};

export default HomePage;
