import React, { useContext, useState } from 'react';
import { ThemeContext } from '../providers/themeProv';
import './header.css';


export const TextEdit = () => {
    const themeCtx = useContext(ThemeContext); //подкллючаем контекст
    const [value, setValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
    const [validation, setValidation] = useState(false);

    const typeChanges = (event) => {
        setValue(event.target.value)
        validate(event.target.value) //получаем введенное значение
    }

    const secondTypeChanges = (event) => {
        setSecondValue(event.target.value);
        validate(event.target.value)
    }

    function validate(value) {
        if (!isNaN(parseFloat(value)) && value !== '') {
			setValidation(false)
		} else if (value === '') {
			setValidation(false)
		} else {
			setValidation(true)
		}
    }

    return(
        <div className='edit__part'>
            <input type="text" placeholder='edit some text' value={value} onChange={typeChanges} 
            className={themeCtx.theme === 'day' ? 'day' : 'night'}/>
            <input type="text" placeholder='edit some text' value={secondValue} onChange={secondTypeChanges}
            className={themeCtx.theme === 'day' ? 'day' : 'night'}/>
            {validation && (<p className='error'>ERROR</p>)}
        </div>
    )
}

export default TextEdit;