import React from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {Home, SideText,BButtons, TextDiv, BButtons2} from './styles/HomePage'

const HomePage = () => {
  return <Home>
    <TextDiv>
   <SideText>
    Hello there!, thank you for visit this collection <br></br> of projects, I hope you like them!
   </SideText>
    <BButtons>
    <AiFillGithub /> Visit my Github!
    </BButtons>
    <BButtons2>
    <AiFillLinkedin /> Visit my Linkedin!
    </BButtons2>
    </TextDiv>
  </Home>;
};

export default HomePage;
