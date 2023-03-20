import React, { useState } from "react";

export const ValidationContext = React.createContext();

const ValidationProvider = (props) => {
    const [value, setValue] = useState(props.text);

    // useEffect(() => {
    //     console.log('was mounted');
    // });

const onType = (event) => {
    setValue(event.target.value);
    props.onChange(event.target.value);
};

return (<>
    <input type="text" placeholder={props.placeHolder} value={value} onChange={onType}/>
    {props.isNotValid && <p>This field is invalid</p>} 
</>)

}

export default ValidationProvider;