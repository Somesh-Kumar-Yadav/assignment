import Proptypes from "prop-types"
import { useEffect, useRef } from "react";
import  Pinitem  from "../Pinitem";
export function Pin(props) {
    const { length, perBox, onChange, label, isValid,text } = props;
    const elements = useRef(new Array(length).fill(""));
    const values = useRef(new Array(length).fill(""));
    console.log(values);
    const handleChange = (value, index) => {
        values.current[index] = value;
        if (value.length === perBox && index<(length-1)) {
            elements.current[index + 1].focus();
        }
        onChange(values.current.join(""));
    }
    const handleBackspace = (value, index) => {
        values.current[index] = value;
        values.current[index] = value;
        if (value.length === 0 && index>0) {
            elements.current[index - 1].focus();
        }
        onChange(values.current.join(""));
    }
    useEffect(() => {
        if (elements?.current && elements.current.length !== 0) {
            elements.current[0].focus();
        }
    },[])
    const handleCallback = (element, index) => {
        elements.current[index]=element
    }
    const handlePaste = (e) => {
        e.preventDefault()
        values.current = values.current.map((a, i) => {
            elements.current[i].value = "";
            return "";
        })
        const val = e.clipboardData.getData("text").split("").filter((a, i) => i < length * perBox)
        val.forEach((value, i) => {
            values.current[i] = value;
            elements.current[i].value = value;
            if (i < length - 1) {
                elements.current[i + 1].focus()
            }
        })
    }
    return <>
        <h1>OTP</h1>
        <div style={{display:"flex"}} onPaste={handlePaste}>
            {values.current.map((item, index) => {
                return <Pinitem maxLength={perBox} text={text} length={length}  ref={(n) => handleCallback(n, index)} handleBackspace={ (value)=>handleBackspace(value,index)} key={index} handleChange={ (value)=>handleChange(value,index)}/>
    })}        
    </div>
    </>
}


Pin.propTypes = {
    length: Proptypes.number.isRequired,
    perBox: Proptypes.number,
    onChange: Proptypes.func,
    label: Proptypes.string,
    isValid:Proptypes.bool
};
Pin.defaultProps = {
    perBox: 1,
    label: null,
    isValid: null,
    
}