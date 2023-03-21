import React, { useState } from "react";

export const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState('day');
    const [val, setVal] = useState('Day');

    const changeThemeToLight = () => {
        setTheme('day');
        setVal('Day');
    };

    const changeThemeToDark = () => {
        setTheme('night');
        setVal('Night');
    };

    const getCxtValue = () => {
        return {
            changeThemeToLight,
            changeThemeToDark,  //змінює тему
            theme,       //поточна тема
            val,
        };
    };

    return (
        <ThemeContext.Provider value={getCxtValue()}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;