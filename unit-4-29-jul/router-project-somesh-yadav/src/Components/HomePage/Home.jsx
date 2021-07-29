import React from "react"
import { Footer } from "../Footer/Footer"
import { NavBar } from "../NavBar.jsx/NavBar"
import { Adverstiment } from "./Adverstiment"
export function Home() {
    return <>
        <NavBar />
        <Adverstiment />
        <Footer/>
    </>
}