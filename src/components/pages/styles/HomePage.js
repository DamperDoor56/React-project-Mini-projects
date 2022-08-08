import styled from 'styled-components';
// import 'https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps:wght@400;700&display=swap';
import { btnReset } from '../../../styles/variables';

export const Home = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background : linear-gradient(180deg, ${({ theme }) => theme.home}, ${({ theme }) => theme.home}, ${({ theme }) => theme.home}),
    url("https://res.cloudinary.com/dweiaqd6l/image/upload/v1659991466/pexels-joyston-judah-933054_ikxy2e.jpg");
    background-size:cover;
    flex-wrap:wrap;
    justify-content: center;
    text-align: center;
    align-items: center;
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