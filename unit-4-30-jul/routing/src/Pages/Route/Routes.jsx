import React from "react"
import { Route, Switch } from "react-router-dom"
import { DashBoard } from "../DashBoard"
import { HomePage } from "../HomePage"
import { LoginPage } from "../LoginPage"
import { Settings } from "../Setttings"
import { PrivateRoutes } from "./PrivateRoutes"

export function Routes() {
    return <>
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route exact path="/login">
                <LoginPage/>
            </Route>
            <PrivateRoutes exact path="/dashboard">
                <DashBoard/>
            </PrivateRoutes>
            <PrivateRoutes path="/dashboard/settings">
                <Settings/>
            </PrivateRoutes>
            <Route>
                <p>Error 404</p>
            </Route>
    </Switch>
    </>
}