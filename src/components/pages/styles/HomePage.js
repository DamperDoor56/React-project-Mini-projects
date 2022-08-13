import styled from 'styled-components';
// import 'https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps:wght@400;700&display=swap';
import { btnReset } from '../../../styles/variables';

export const Home = styled.div`
    width: 100vw;
    position:fixed;
    height: 100vh;
    background : linear-gradient(180deg, ${({ theme }) => theme.home}, ${({ theme }) => theme.home}, ${({ theme }) => theme.home}),
    url("https://res.cloudinary.com/dweiaqd6l/image/upload/v1659991466/pexels-joyston-judah-933054_ikxy2e.jpg");
    background-size:cover;
    `;

export const TextDiv = styled.div`
   display: flex;
   margin-top: 12%;
   margin-left: 5%;
   flex-direction: column;
   justify-content: left;
   text-align: left;
   align-items: left;

`
export const TodoHome = styled.div `
   background : linear-gradient(180deg, ${({ theme }) => theme.hometodo}, ${({ theme }) => theme.hometodo}, ${({ theme }) => theme.home}),
   url("https://wallpaperaccess.com/full/151024.jpg");
   background-size: cover;
   background-repeat: no-repeat;
`;
export const SideText = styled.text`
   font-family: monospace;
   margin-left:5%;
   font-size: 25px;
`;
export const BButtons = styled.button`
   ${btnReset};
   background: ${({ theme }) => theme.bg};
   height: 50px;
   width: 120px;
   border-radius: 3px;
   cursor: pointer;

`
export const BButtons2 = styled.button`
   ${btnReset};
   background: ${({ theme }) => theme.bg};
   height: 50px;
   width: 120px;
   border-radius: 3px;
   cursor: pointer;

`