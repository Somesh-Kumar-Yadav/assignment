import React from "react"
import { Route, Switch } from "react-router"
import { Todos } from "../components/Todos"
import { TodosDetails } from "../components/TodosDetails"

export function Routes() {
    return <>
        <Switch>
            <Route exact path="/">
                <Todos/>
            </Route>
            <Route exact path="/todos/:id">
                <TodosDetails/>
            </Route>
            <Route>
                <h1>Error 404</h1>
            </Route>
        </Switch>
    </>
}