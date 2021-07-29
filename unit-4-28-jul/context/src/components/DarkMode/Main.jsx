import React from "react"
import styled from "styled-components"
import { Card } from "./Card"
import { LeftMenu } from "./LeftMenu"
import { Navbar } from "./Navbar"

const Container = styled.div`
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
background: #F5F6FA;
`
export function Main() {
    return <Container>
        <LeftMenu />
        <Navbar />
        <Card/>
    </Container>
}