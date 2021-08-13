import styled from "styled-components"
import Proptypes from "prop-types"
import React from "react";
const Button = styled.div`
display: flex;
background:  ${props => props.length===props.text.length?"#d8e6d4":"#E8ECEF" };
&>input{
    background:  ${props => props.length===props.text.length?"#d5e4d1":"#E3E8E7" };
    width: 5rem;
    height: 5rem;
    padding: 1rem;
    margin: 1rem;
    font-size: 2.5rem;
    border-radius: 0.5rem;
    outline: none;
    border-color:  ${props => props.length===props.text.length?"#B0D0AC":"#948AE8" };
    color:  ${props => props.length===props.text.length?"#B0D0AC":"#948AE8" };
}
`
const Pinitem = React.forwardRef((props, ref) => {
    const handleKeyUp = (e) => {
        switch (e.code) {
            case "Backspace": {
                props.handleBackspace(e.target.value);
                break;
            }
            case "ShiftLeft":
            case "Tab":
            case "ArrowLeft":
            case "ArrowRight":
            case "ArrowUp":
            case "ArrowDown":
                {
                console.log(e.code)
                break;
            }
                default:{
                props.handleChange(e.target.value);
                }
        }   
    }
    return <Button text={props.text} length={props.length} >
        <input type="text" onKeyUp={handleKeyUp} ref={ref} maxLength={props.maxLength} onChange={(e)=>props.handleChange(e.target.value)}/>
    </Button>
})
Pinitem.propTypes = {
    maxLength: Proptypes.number, 
}
Pinitem.default = {
    maxLength: 1, 
}
export default Pinitem;