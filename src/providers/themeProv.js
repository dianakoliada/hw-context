import React, { useState } from "react";

export const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState('day');

    const changeThemeToLight = () => {
        setTheme('day');
    };

    const changeThemeToDark = () => {
        setTheme('night');
    };

    const getCxtValue = () => {
        return {
            changeThemeToLight,
            changeThemeToDark,  //змінює тему
            theme,       //поточна тема
        };
    };

    return (
        <ThemeContext.Provider value={getCxtValue()}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;