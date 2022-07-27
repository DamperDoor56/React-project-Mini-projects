import React from 'react'
import { SLayout, SMain } from './styles';

export const Layout = ({children}) => {
  return (<SLayout>
        <Sidebar />
        <SMain>{children}</SMain>
    </SLayout>
  );
};

export default Layout;