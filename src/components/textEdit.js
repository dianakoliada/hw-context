import { useContext } from 'react';
import './header.css';
import { ThemeContext } from '../providers/themeProv';
// import { ValidationContext } from "../providers/validation";

const TextEdit = () => {
    const themeCtx = useContext(ThemeContext); //подкллючаем контекст
    //  const validationCtx = useContext(ValidationContext); //подкллючаем контекст

    return(
        <>
            <div className='edit__part'>
                <input 
                type="text" 
                placeholder='edit some text' 
                style={themeCtx.theme ? { background: "white"} : { background: "#282c34"}}/>
                <input 
                type="text" 
                placeholder='edit some text' 
                style={themeCtx.theme ? { background: "white" } : { background: "#282c34" }}/>
                <p id='indicator' style={themeCtx.theme ? { background: "white"} : { background: "#282c34"}}>
                    {themeCtx.theme ? 'Day' : 'Night'}
                </p>
                {/* <p id='indicator' className={themeCtx.theme ? 'day' : 'night'}>
                    {themeCtx.theme ? 'Day' : 'Night'}
                </p> */}
            </div>
        </>
    )
}

export default TextEdit;