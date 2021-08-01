import React from "react"
import styled from "styled-components"
import { ThemeContext } from "../../context/ThemeContext"
const Section = styled.section`
height:100vh;
width:7vw;
position: absolute;
top:0;
box-shadow: 0 0 4px 0.5px #222222;
left:0;
display:flex;
flex-direction: column;
align-items: center;
background:${props => props.color ==="dark"?"#2d2d2d" : "#F5F6FA"}; 
justify-content: space-between;
&>div:nth-child(1)>div{
    width: 4vw;
    height: 4vw;
    overflow: hidden;
    margin-top: 30px;
}
&>div:nth-child(2)>li{
    list-style: none;
}
&>div:nth-child(3)>div{
     width: 8vw;
    height: 8vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
&>div:nth-child(3)>div>span{
    width: 40%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    color:#fff;
    font-size: 30px;
    align-items: center;
    height: 40%;
    background: green;
}
&>div:nth-child(1)>div>img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
`
export function LeftMenu() {
    const value = React.useContext(ThemeContext);
    return <Section color={value.theme}>
        <div>
            <div><img src="https://pbs.twimg.com/profile_images/1378999055154511879/XmphRvoz_400x400.jpg" alt=""></img></div>
        </div>
        <div>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </div>
        <div>
            <div>
                <span>+</span>
            </div>
        </div>
    </Section>
}