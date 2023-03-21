import React, { useContext } from "react";
import TextEdit from "./textEdit";
import { ThemeContext } from '../providers/themeProv';
import './header.css';

export const Header = () => {
    const themeCtx = useContext(ThemeContext); //подкллючаем контекст

    const handleThemeChangeToLight = () => {
        themeCtx.changeThemeToLight();
    }

    const handleThemeChangeToDark = () => {
        themeCtx.changeThemeToDark();
    }

    return (
        <>
            <div className="div1">
                <button onClick={handleThemeChangeToDark}>Dark</button>
                <button onClick={handleThemeChangeToLight}>Light</button>
            </div>
            <div className={themeCtx.theme === 'day' ? 'day' : 'night'}>
                <p id='indicator' className={themeCtx.theme === 'day' ? 'day' : 'night'}>
                    {themeCtx.theme === 'day' ? 'Day' : 'Night'}    
                </p>
                <TextEdit />
            </div>
        </>
    )
}

export default Header;