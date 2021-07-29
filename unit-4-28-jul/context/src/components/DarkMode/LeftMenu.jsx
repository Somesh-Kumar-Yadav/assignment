import React from "react"
import styled from "styled-components"
const Section = styled.section`
height:100vh;
width:7vw;
border:1px solid red;
position: absolute;
top:0;
left:0;
display:flex;
`
export function LeftMenu() {
    return <Section>
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
            <div></div>
        </div>
    </Section>
}