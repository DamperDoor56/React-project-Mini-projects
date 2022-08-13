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

export const textDiv = styled.div`
   display: flex;
   flex-wrap:wrap;
   justify-content: center;
   text-align: center;
   align-items: center;

`
export const TodoHome = styled.div `
   background : linear-gradient(180deg, ${({ theme }) => theme.hometodo}, ${({ theme }) => theme.hometodo}, ${({ theme }) => theme.home}),
   url("https://wallpaperaccess.com/full/151024.jpg");
   background-size: cover;
   background-repeat: no-repeat;
`;
export const SideText = styled.text`
   font-family: monospace;
   font-size: 25px;
   position: absolute;
   top: 200px;
`;
export const BButtons = styled.button`
   ${btnReset};
   margin: 1rem;
   background: ${({ theme }) => theme.bg};
   height: 50px;
   width: 120px;
   border-radius: 3px;
   cursor: pointer;

`