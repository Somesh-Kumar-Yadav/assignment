import React from "react"
import { Route, Switch } from "react-router-dom"
import { About } from "../Components/About/About"
import { Clothes } from "../Components/Clothes.jsx/Clothes"
import { Contact } from "../Components/Contact/Contact"
import { Faq } from "../Components/FAQ/Faq"
import { Home } from "../Components/HomePage/Home"

export function Routes() {
    return <>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/clothes">
                <Clothes/>
            </Route>
            <Route path="/about-us">
                <About/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
            <Route path="/faq">
                <Faq/>
            </Route>
            <Route>
                <h1>Page under-construction</h1>
            </Route>
        </Switch>
    </>
}