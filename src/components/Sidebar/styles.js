import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { btnReset, v } from '../../styles/variables';

export const SSidebar = styled.div`
    width: ${v.sidebar};
    background: ${({ theme }) => theme.bg};
    height: 100vh;
    padding: ${v.lgSpacing};
    
    position: relative;`;

export const SLogo = styled.div`
    width:80px;

    img{
        max-heigth: 100%;
        heigth: auto;
    }
    cursor: pointer;

    margin-bottom: ${v.lgSpacing};
    `;

export const SSearch = styled.div`
    background: ${({theme}) => theme.bgAlpha};
    border: 1px solid ${({theme}) => theme.bg3};
    border-radius: ${v.borderRadius};
    input{
        padding: 0 ${v.smSpacing};
        font-family: inherit;
        letter-spacing: inherit;
        font-size: 16px;
        width: 100%;
        outline:none;
        border: none;
        color:inherit;
        background: transparent;
    }
    display:flex;
`;
export const SSearchIcon = styled.button`
       ${btnReset};
       padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
       display: flex;
       cursor: pointer;

       svg{
        font-size:20px;
       }
`;

export const SLinkContainer = styled.div`
       background: transparent;
       border-radius: ${v.borderRadius};
       margin: 8px 0;

       :hover{
        box-shadow: inset 0 0 0 1px ${({theme}) => theme.bg3};
       }
`
export const SLink = styled(Link)`
       display: flex;
       align-items: center;
       text-decoration: none;
       color: inherit;
       font-size: 16px;
       padding: calc(${v.smSpacing} - 2px) 0;
`
export const SLinkIcon = styled.div`
      padding: ${v.smSpacing} ${v.mdSpacing};
      display: flex;

      svg{
        font-size: 20px;
      }
`;

export const SLinkLabel = styled.span`
     display: block;
     flex: 1;
     margin-left: ${v.smSpacing};
`;

export const SLinkNotification = styled.div`
    font-size: 14px;
    padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
    border-radius: calc(${v.borderRadius} / 2);
    background: ${({theme}) => theme.primary};
    color:white;

    margin-right: ${v.mdSpacing};
`;

export const STheme = styled.div`
   display:flex;
   align-items:center;
   font-size: 16px;
`;