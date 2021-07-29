import React from "react"
import { Route, Switch } from "react-router-dom"
import { Home } from "../Components/DynamicRouting/Home"
import { ProductDetails } from "../Components/DynamicRouting/ProductDetails"
import { Products } from "../Components/DynamicRouting/Products"
export function Routes1() {
    return <>
        <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/product"><Products/></Route>
            <Route exact path="/product/:id"><ProductDetails /></Route>
            <Route>
               <h1> Error 404</h1>
            </Route>
        </Switch>
    </>
}