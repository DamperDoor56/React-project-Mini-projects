import React from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {Home, SideText,BButtons, textDiv} from './styles/HomePage'

const HomePage = () => {
  return <Home>
    <textDiv>
   <SideText>
    Hello there!, thank you for visit <br></br> this collection of projects, I hope you like them!
   </SideText>
    <BButtons>
    <AiFillGithub /> Visit my Github!
    </BButtons>
    <BButtons>
    <AiFillLinkedin /> Visit my Linkedin!
    </BButtons>
    </textDiv>
  </Home>;
};

export default HomePage;
