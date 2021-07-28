import React from "react"
import styled from "styled-components"
import { ThemeContext } from "../../context/ThemeContext"

const Foot = styled.footer`
position: absolute;
bottom: 0;
left: 0;
width: 100vw;
height: 40px;
box-shadow: 0px 0px 4px 0.5px #2d2d2d;
list-style: none;
display: flex;
align-items: center;
 background:${props => props.color ==="dark"?"#535252" : "#ccc"}; 
& >li{
padding: 0px 10px;
border: none;
color:${props => props.color ==="light"?"#2d2d2d" : "#ccc"};
        cursor: pointer;
border-right: ${props => props.color ==="light"?"1px solid #2d2d2d" : "1px solid #ccc"};
}
`
export function Footer() {
    const value = React.useContext(ThemeContext);
    return <React.Fragment>
        <Foot color={value.theme}>
        <li>About Us</li>
        <li>Disclamer</li>
        <li>Feedback</li>
        <li>FAQs</li>
        <li>Privacy Policy</li>
        <li>News</li>
        <li>Terms & Conditions</li>
        </Foot>
    </React.Fragment>
}