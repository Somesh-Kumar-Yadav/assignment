import React from "react"
import styled from "styled-components"
import { Card } from "./Card"
import { LeftMenu } from "./LeftMenu"
import { Navbar } from "./Navbar"
import { ThemeContext } from "../../context/ThemeContext"

const Container = styled.div`
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
background:${props => props.color ==="dark"?"#535252" : "#F5F6FA"}; 
`
export function Main() {
    const value = React.useContext(ThemeContext);
    return <Container color={value.theme}>
        <LeftMenu />
        <Navbar />
        <Card/>
    </Container>
}