import React from "react"
import styled from "styled-components"
import { ThemeContext } from "../../context/ThemeContext"
const Section = styled.section`
width: 100vw;
 display: flex;
 justify-content: center;
    align-items: center;
    height: 600px;
& >div{
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 250px;
    border-radius: 20px;
    background:${props => props.color ==="dark"?"#535252" : "#ccc"}; 
    box-shadow: 0px 0px 4px 0.5px #2d2d2d;
    
}
& >div>input{
        margin: 5px;
        padding: 3px;
        padding-bottom: 5px;
        outline: none;
        border:none;
        border-bottom: 1px solid #2d2d2d;
}
& >div>button{
    width: 70px;
    height: 30px;
    border-radius: 15px;
        margin: 10px;
        padding: 3px;
        outline: none;
        border:none;
        background:${props => props.color ==="dark"?"#2d2d2d" : "#fff"} ;
        color:${props => props.color ==="light"?"#2d2d2d" : "#ccc"};
        cursor: pointer;
}
& >div>button:hover{
    transform: scale(1.01);
}
& >div>h4{
       color:${props => props.color ==="light"?"#2d2d2d" : "#ccc"};
       font-size:20px ;
       margin: 0;
       margin-bottom: 10px;
}
`

export function Form() {
    const value = React.useContext(ThemeContext);
    return <React.Fragment>
        <Section color={value.theme}>
            <div>
                <h4>Login</h4>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button>Login</button>
            </div>
        </Section>
    </React.Fragment>
}