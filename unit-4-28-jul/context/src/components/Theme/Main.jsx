import React from "react"
import { Footer } from "./Footer"
import { Form } from "./Form"
import { Navbar } from "./Navbar"

export function Main() {
    return <React.Fragment>
        <Navbar />
        <Form />
        <Footer/>
    </React.Fragment>
}