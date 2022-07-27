import React from 'react';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/variables';

export const ThemeContext = React.createContext(null);

const App = () => {
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === 'light' ? lightTheme : darkTheme;
  
    return (
        <ThemeContext.Provider value={{setTheme, theme}}>
         <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet>
            <title> Sidebar - Code Focus</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>

        </Helmet>
        <>
        <Layout>test</Layout>
        </>
    </ThemeProvider>
    </ThemeContext.Provider>
    );
};

export default App;