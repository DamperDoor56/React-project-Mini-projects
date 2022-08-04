import styled from 'styled-components';
import Image from '../../../assets/beautiful-young-woman-home-office-working-from-home-teleworking-concept.jpg'
import { btnReset } from '../../../styles/variables';

export const Home = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background : ${({ theme }) => theme.home};
    flex-wrap:wrap;
    justify-content: center;
    text-align: center;
    align-items: center;
    `;
export const TitleText = styled.text`
    font-size: 40px;
    text-decoration: underline;
    position: absolute; 
    top: 50px;
`;
export const SideText = styled.text`
   font-size: 20px;
   position: absolute;
   top: 140px;
`;
export const IImage = styled.div`
   margin-top: 3rem;
   border: 6px solid ${({ theme }) => theme.bg};
   border-radius: 50%;
   width: 380px;
   height: 280px;
   background-image: url(${Image});
   background-size: cover;
`
export const BButtons = styled.button`
   ${btnReset};
   background: ${({ theme }) => theme.bg};
   height: 50px;
   width: 120px;
   border-radius: 3px;
   cursor: pointer;

`