import styled from 'styled-components';

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
    position: absolute; 
    top: 50px;
`
export const SideText = styled.text`
   font-size: 20px;
   position: absolute;
   top: 150px;
`
export const buttons = styled.button`

`