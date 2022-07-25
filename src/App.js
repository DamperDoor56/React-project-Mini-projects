import React from 'react'
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/variables';

export const ThemeContext = React.createContext(null);

const App = () => {
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === 'light' ? lightTheme : darkTheme;
  
    return <ThemeProvider theme={themeStyle}>
        hi
    </ThemeProvider>;
};

export default App;