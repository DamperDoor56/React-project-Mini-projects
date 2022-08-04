import React from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {Home, SideText,IImage,BButtons, TitleText} from './styles/HomePage'

const HomePage = () => {
  return <Home>
   <TitleText>Home Page</TitleText> 
   <SideText>
    Hello there!, thank you for visit <br></br> this collection of projects, I hope you like them!
   </SideText>
    <IImage></IImage>
    <BButtons>
    <AiFillGithub /> Visit my Github!
    </BButtons>
    <BButtons>
    <AiFillLinkedin /> Visit my Linkedin!
    </BButtons>
  </Home>;
};

export default HomePage;
