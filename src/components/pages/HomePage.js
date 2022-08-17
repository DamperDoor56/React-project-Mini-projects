import React,{createContext} from 'react';
import './styles/Home.css';
import {BsLinkedin, BsGithub} from 'react-icons/bs'

export const ThemeContext = createContext(null);

const HomePage = () => { 
  return (<>
  <div className='welcome'>
    <div className='title-center'>
    <h1 className='titls-home'>Home Page</h1>
    <p className='ptext'>Hi! Thank you for passing by! This is a collection of react projects. <br></br>
    You can also take a look at my Github or Linkedin profile</p>
    </div>
    <div className='center-them'> 
    <button className='buttonsa'><a href='https://github.com/DamperDoor56'><BsGithub /> Github</a> </button>
    <button className='buttonsa'><a href='https://www.linkedin.com/in/ludmila-rocio-lopez-082b75218/'><BsLinkedin />Linkedin</a> </button>
    </div>
    </div>
  </>
  )

};

export default HomePage;
