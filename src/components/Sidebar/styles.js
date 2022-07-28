import styled from 'styled-components';
import { v } from '../../styles/variables';

export const SSidebar = styled.div`
    width: ${v.sidebar};
    background: ${({ theme }) => theme.bg};
    height: 100vh;
    padding: ${v.lgSpacing};
    
    position: relative;`;

export const SLogo = styled.div`
    width:52px;

    img{
        max-heigth: 100%;
        heigth: auto;
    }
    cursor: pointer;
    
    margin-bottom: ${v.lgSpacing};
    `;

export const SSearch = styled.div`
    background: ${({theme}) => theme.bgAlpha};
`