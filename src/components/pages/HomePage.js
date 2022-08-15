import React,{createContext, useState} from 'react';
import './styles/Home.css';

export const ThemeContext = createContext(null);

const HomePage = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
}; 
  return (<>
  <div className='home' id={theme}>
    <h1 className='titls-home'>Home Page</h1> 
    <button></button>
    <button></button>
  </div>
  </ThemeContext.Provider>
  </>
  )

};

export default HomePage;
