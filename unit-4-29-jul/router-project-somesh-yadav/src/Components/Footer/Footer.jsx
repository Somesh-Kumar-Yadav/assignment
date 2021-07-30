import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Foot = styled.footer`
display: flex;
border-top: 1px solid #222222;
justify-content: space-between;
align-items: center;
height: 3em;
font-family: Brush Script MT, Brush Script Std, cursive;
width: 100vw;
list-style:none;
&>div{
    display: flex;
justify-content: center;
align-items: center;
}
&>div>li{
    font-size: 1.4em;
    cursor: pointer;
    padding-right: 10px;
    margin-left: 5px;
    border-right:1 px solid #222222 ;
}
&>div>li>a{
    text-decoration: none;
    color: #222222;
}
`
export function Footer() {
    return <>
        <Foot>
            <div>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
            </div>
            <div>
                <li><Link to="/faq">FAQs</Link></li>
                <li>Job Opportunities</li>  
            </div>
       </Foot>
    </>
}