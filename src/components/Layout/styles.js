import styled from 'styled-components';

import {v} from "../../styles/variables";

export const SLayout = styled.div`
    display:flex;
`
export const SMain = styled.main`
   padding: calc(${v.smlSpacing} * 2); 

   h1 {
      font-size: 14px;
   }
`;

export const SDivider = styled.div`
   heigth: 1px;
   width: 100%;
   background: ${({theme}) => theme.bg3};
   margin: ${v.smSpacing} 0;
`

   